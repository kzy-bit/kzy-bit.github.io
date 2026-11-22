const { injector, helper } = hexo.extend;
const urlFor = (path) => helper.get('url_for').call({ config: hexo.config }, path, { relative: false });

injector.register('head_end', `<link rel="stylesheet" href="${urlFor('css/night-sky.css')}">`);
injector.register('body_begin', '<div class="night-sky" aria-hidden="true"></div>');
const mascotButton = (name, label) => {
  const image = urlFor(`images/mascot-${name}.webp`);
  return `
    <button class="blog-mascot blog-mascot--${name}" type="button" aria-label="${label}">
      <span class="mascot-figure" aria-hidden="true">
        <img class="mascot-wing mascot-wing--left" src="${image}" alt="" draggable="false">
        <img class="mascot-wing mascot-wing--right" src="${image}" alt="" draggable="false">
        <img class="mascot-body" src="${image}" width="384" height="351" alt="" draggable="false">
        <span class="mascot-eyelid mascot-eyelid--left"></span>
        <span class="mascot-eyelid mascot-eyelid--right"></span>
      </span>
    </button>
  `;
};

injector.register('body_end', `
  <div class="star-click-layer" aria-hidden="true"></div>
  <template id="blog-mascots-template">
    <section class="blog-mascots" aria-label="天使和恶魔">
      ${mascotButton('angel', '和小天使打招呼')}
      ${mascotButton('devil', '和小恶魔打招呼')}
    </section>
  </template>
  <script defer src="${urlFor('js/night-sky.js')}"></script>
`);
