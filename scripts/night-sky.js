const { injector, helper } = hexo.extend;
const urlFor = (path) => helper.get('url_for').call({ config: hexo.config }, path, { relative: false });

injector.register('head_end', `<link rel="stylesheet" href="${urlFor('css/night-sky.css')}">`);
injector.register('body_begin', '<div class="night-sky" aria-hidden="true"></div>');

const angel = urlFor('images/mascot-angel.webp');
injector.register('body_end', `
  <div class="star-click-layer" aria-hidden="true"></div>
  <template id="blog-angel-template">
    <div class="blog-angel" aria-hidden="true">
      <span class="mascot-figure">
        <img class="mascot-wing mascot-wing--left" src="${angel}" alt="" draggable="false">
        <img class="mascot-wing mascot-wing--right" src="${angel}" alt="" draggable="false">
        <img class="mascot-body" src="${angel}" width="384" height="351" alt="" draggable="false">
        <span class="mascot-eyelid mascot-eyelid--left"></span>
        <span class="mascot-eyelid mascot-eyelid--right"></span>
      </span>
    </div>
  </template>
  <script defer src="${urlFor('js/night-sky.js')}"></script>
`);
