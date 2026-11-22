(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mascots = Array.from(document.querySelectorAll('.flying-mascot'), (node, index) => ({
    node,
    side: index === 0 ? -1 : 1,
    figure: node.querySelector('.mascot-hover'),
    spark: node.querySelector('.mascot-spark'),
    animations: [],
  }));

  if (mascots.length) {
    let pointer = null;
    let frame = 0;
    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    function updateFlight() {
      frame = 0;
      let moving = false;
      for (const pet of mascots) {
        const dx = pet.targetX - pet.x;
        const dy = pet.targetY - pet.y;
        const easing = pet.side < 0 ? 0.17 : 0.14;
        const reached = Math.abs(dx) < 0.35 && Math.abs(dy) < 0.35;
        pet.x = reached ? pet.targetX : pet.x + dx * easing;
        pet.y = reached ? pet.targetY : pet.y + dy * easing;
        pet.node.style.setProperty('--mascot-x', `${pet.x}px`);
        pet.node.style.setProperty('--mascot-y', `${pet.y}px`);
        pet.node.style.setProperty('--bank', `${reached ? 0 : clamp(dx * 0.05, -8, 8)}deg`);
        moving ||= !reached;
      }
      if (moving) frame = requestAnimationFrame(updateFlight);
    }

    function aimFlight(immediate = false) {
      const margin = window.innerWidth < 600 ? 37 : 60;
      const wingSpan = Math.min(90, window.innerWidth * 0.24);
      for (const pet of mascots) {
        const homeX = pet.side < 0 ? margin + 8 : window.innerWidth - margin - 8;
        const homeY = Math.max(margin, window.innerHeight - margin - 13);
        pet.targetX = pointer ? clamp(pointer.x + wingSpan * pet.side, margin, window.innerWidth - margin) : homeX;
        pet.targetY = pointer ? clamp(pointer.y - 22 + pet.side * 5, margin, window.innerHeight - margin) : homeY;
        if (immediate) {
          pet.x = pet.targetX;
          pet.y = pet.targetY;
        }
      }
      if (!frame) frame = requestAnimationFrame(updateFlight);
    }

    function rest() {
      pointer = null;
      if (reducedMotion.matches) {
        for (const pet of mascots) pet.animations.forEach((animation) => animation.cancel());
      }
      aimFlight(reducedMotion.matches);
    }

    aimFlight(true);
    document.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse' || reducedMotion.matches) return;
      pointer = { x: event.clientX, y: event.clientY };
      aimFlight();
    }, { passive: true });
    document.documentElement.addEventListener('pointerleave', rest);
    window.addEventListener('blur', rest);
    window.addEventListener('resize', () => aimFlight(!pointer));
    reducedMotion.addEventListener('change', rest);
  }

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

    for (const pet of mascots) {
      pet.animations.forEach((animation) => animation.cancel());
      pet.animations = [
        pet.figure.animate([
          { transform: 'translateY(0)' },
          { transform: `translateY(-15px) rotate(${pet.side * 10}deg)`, offset: 0.45 },
          { transform: 'translateY(0)' },
        ], { duration: 480, easing: 'ease-in-out' }),
        pet.spark.animate([
          { opacity: 0, transform: 'translate(-50%, 4px) scale(0.65)' },
          { opacity: 1, transform: 'translate(-50%, -7px) scale(1)', offset: 0.24 },
          { opacity: 0, transform: 'translate(-50%, -24px) scale(0.85)' },
        ], { duration: 690, easing: 'ease-out' }),
      ];
    }
  });
})();
