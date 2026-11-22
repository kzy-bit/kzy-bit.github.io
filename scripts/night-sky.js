const { injector, helper } = hexo.extend;
const urlFor = (path) => helper.get('url_for').call({ config: hexo.config }, path, { relative: false });

injector.register('head_end', `<link rel="stylesheet" href="${urlFor('css/night-sky.css')}">`);
injector.register('body_begin', '<div class="night-sky" aria-hidden="true"></div>');
injector.register('body_end', `<div class="star-click-layer" aria-hidden="true"></div><script defer src="${urlFor('js/night-sky.js')}"></script>`);
