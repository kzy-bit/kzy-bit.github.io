(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const header = document.getElementById('header-outer');
  const angelTemplate = document.getElementById('blog-angel-template');
  if (header && angelTemplate) header.append(angelTemplate.content.cloneNode(true));

  const video = document.querySelector('.wallpaper-video');

  if (video) {
    const toggle = document.createElement('button');
    const icon = document.createElement('span');
    toggle.className = 'nav-icon wallpaper-toggle';
    toggle.type = 'button';
    icon.setAttribute('aria-hidden', 'true');
    toggle.append(icon);
    document.getElementById('sub-nav')?.prepend(toggle);
    let userPaused = false;

    function updateControl() {
      const label = video.paused ? '播放背景视频' : '暂停背景视频';
      icon.className = video.paused ? 'fa fa-play' : 'fa fa-pause';
      toggle.setAttribute('aria-label', label);
      toggle.title = label;
      toggle.hidden = reducedMotion.matches || Boolean(video.error);
    }

    function updatePlayback() {
      if (reducedMotion.matches || document.hidden || userPaused) {
        video.pause();
        if (reducedMotion.matches) video.classList.remove('has-video-frame');
      } else {
        if (!video.getAttribute('src')) video.src = video.dataset.src;
        video.play().catch(updateControl);
      }
      updateControl();
    }

    video.muted = true;
    video.addEventListener('playing', () => {
      if (!reducedMotion.matches) video.classList.add('has-video-frame');
      updateControl();
    });
    video.addEventListener('pause', updateControl);
    video.addEventListener('error', () => {
      video.classList.remove('has-video-frame');
      updateControl();
    });
    toggle.addEventListener('click', () => {
      userPaused = !video.paused;
      updatePlayback();
    });
    document.addEventListener('visibilitychange', updatePlayback);
    reducedMotion.addEventListener('change', updatePlayback);
    updatePlayback();
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
      event.target.closest?.('.wallpaper-toggle, input, textarea, select, [contenteditable=true]') ||
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
