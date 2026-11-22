(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const wallpaper = document.querySelector('.night-sky');

  if (wallpaper) {
    let x = 0;
    let y = 0;
    let frame = 0;

    function moveWallpaper(nextX, nextY) {
      x = nextX;
      y = nextY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        wallpaper.style.setProperty('--wallpaper-x', `${x}px`);
        wallpaper.style.setProperty('--wallpaper-y', `${y}px`);
        frame = 0;
      });
    }

    const centerWallpaper = () => moveWallpaper(0, 0);
    document.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse' || reducedMotion.matches) return;
      moveWallpaper(
        Math.round((event.clientX / window.innerWidth - 0.5) * 42),
        Math.round((event.clientY / window.innerHeight - 0.5) * 34),
      );
    }, { passive: true });
    document.documentElement.addEventListener('pointerleave', centerWallpaper);
    window.addEventListener('blur', centerWallpaper);
    reducedMotion.addEventListener('change', centerWallpaper);
  }

  const layer = document.querySelector('.star-click-layer');
  if (!layer) return;

  const colors = ['#fdf2ce', '#a9e9ff', '#cfb6ff', '#ffffff'];
  const particleCount = 9;
  const maxBursts = 5;

  document.addEventListener('click', (event) => {
    if (
      reducedMotion.matches ||
      event.detail === 0 ||
      event.target.closest?.('input, textarea, select, [contenteditable=true]') ||
      !window.getSelection().isCollapsed
    ) {
      return;
    }

    const burst = document.createElement('span');
    burst.className = 'star-burst';
    burst.style.left = `${event.clientX}px`;
    burst.style.top = `${event.clientY}px`;
    const rotation = Math.random() * Math.PI * 2;

    for (let index = 0; index < particleCount; index += 1) {
      const angle = rotation + index * Math.PI * 2 / particleCount;
      const distance = 23 + Math.random() * 34;
      const particle = document.createElement('span');
      particle.className = 'star-particle';
      particle.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
      particle.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
      particle.style.setProperty('--size', `${9 + Math.random() * 8}px`);
      particle.style.setProperty('--spark-color', colors[index % colors.length]);
      particle.style.setProperty('--turn', `${(index % 2 ? -1 : 1) * (40 + Math.random() * 140)}deg`);
      particle.style.setProperty('--life', `${440 + Math.random() * 260}ms`);
      burst.append(particle);
    }

    if (layer.childElementCount >= maxBursts) layer.firstElementChild.remove();
    layer.append(burst);
    window.setTimeout(() => burst.remove(), 750);
  });
})();
