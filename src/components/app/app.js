define(['knockout', 'text!./app.html'], function(ko, template) {

  function AppViewModel(params) {
    var self = this;
    self.route = params.route;
    self.locale = params.locale;
  }

  return { viewModel: AppViewModel, template: template };
});
