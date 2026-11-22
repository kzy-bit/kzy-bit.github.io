const { injector, helper } = hexo.extend;
const urlFor = (path) => helper.get('url_for').call({ config: hexo.config }, path, { relative: false });

injector.register('head_end', `<link rel="stylesheet" href="${urlFor('css/night-sky.css')}">`);
injector.register('body_begin', '<div class="night-sky" aria-hidden="true"></div>');
const flyingMascot = (name, spark) => {
  const image = urlFor(`images/mascot-${name}.webp`);
  return `
    <div class="flying-mascot flying-mascot--${name}">
      <div class="mascot-hover">
        <img class="mascot-wing mascot-wing--left" src="${image}" alt="" draggable="false">
        <img class="mascot-wing mascot-wing--right" src="${image}" alt="" draggable="false">
        <img class="mascot-body" src="${image}" width="384" height="351" alt="" draggable="false">
        <span class="mascot-eyelid mascot-eyelid--left"></span>
        <span class="mascot-eyelid mascot-eyelid--right"></span>
      </div>
      <span class="mascot-spark">${spark}</span>
    </div>
  `;
};

injector.register('body_end', `
  <div class="star-click-layer" aria-hidden="true"></div>
  <div class="flying-mascots" aria-hidden="true">
    ${flyingMascot('angel', '✦')}
    ${flyingMascot('devil', '✧')}
  </div>
  <script defer src="${urlFor('js/night-sky.js')}"></script>
`);
