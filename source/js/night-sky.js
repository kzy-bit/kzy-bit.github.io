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

  const colors = ['#ffca83', '#fff1bf', '#ffaf8a', '#e3f3ff'];
  const sparkCount = 18;
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
    burst.className = 'firework-burst';
    burst.style.left = `${event.clientX}px`;
    burst.style.top = `${event.clientY}px`;
    const rotation = Math.random() * 360;

    for (let index = 0; index < sparkCount; index += 1) {
      const angle = rotation + index * 360 / sparkCount + Math.random() * 12 - 6;
      const spark = document.createElement('span');
      spark.className = 'firework-spark';
      spark.style.setProperty('--angle', `${angle}deg`);
      spark.style.setProperty('--distance', `${40 + Math.random() * 54}px`);
      spark.style.setProperty('--length', `${7 + Math.random() * 15}px`);
      spark.style.setProperty('--fall', `${9 + Math.random() * 16}px`);
      spark.style.setProperty('--spark-color', colors[index % colors.length]);
      spark.style.setProperty('--life', `${510 + Math.random() * 270}ms`);
      burst.append(spark);
    }

    if (layer.childElementCount >= maxBursts) layer.firstElementChild.remove();
    layer.append(burst);
    window.setTimeout(() => burst.remove(), 850);
  });
})();
