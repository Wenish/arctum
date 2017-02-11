define(['knockout', 'text!./app.html'], function(ko, template) {

  function AppViewModel(params) {
    var self = this;
    self.route = params.route;
    self.currentLanguage = params.currentLanguage;
  }

  return { viewModel: AppViewModel, template: template };
});
