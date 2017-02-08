define(['knockout', './router'], function(ko, router) {

  // Components can be packaged as AMD modules, such as the following:
  ko.components.register('app', { require: 'components/app/app' });
  ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
  ko.components.register('page-home', { require: 'components/page-home/page-home' });

  // ... or for template-only components, you can just point to a .html file directly:
  ko.components.register('page-about', {
    template: { require: 'text!components/page-about/page-about.html' }
  });

  // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

  // Start the application
  ko.applyBindings({ route: router.currentRoute });
});
