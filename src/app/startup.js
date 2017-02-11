define(['knockout', './router'], function(ko, router) {

  // Components can be packaged as AMD modules, such as the following:
  ko.components.register('app', { require: 'components/app/app' });
  ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
  ko.components.register('page-home', { require: 'components/page-home/page-home' });
  ko.components.register('page-ranking', { require: 'components/page-ranking/page-ranking' });
  ko.components.register('card', { require: 'components/card/card' });

  // ... or for template-only components, you can just point to a .html file directly:
  ko.components.register('loader', {
    template: { require: 'text!components/loader/loader.html' }
  });

  ko.components.register('row-ranking', { require: 'components/row-ranking/row-ranking' });


  ko.components.register('page-profile', { require: 'components/page-profile/page-profile' });


  // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]
  // Start the application
  ko.applyBindings({ route: router.currentRoute });
});
