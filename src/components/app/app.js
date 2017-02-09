define(['knockout', 'text!./app.html'], function(ko, template) {

  function AppViewModel(params) {
    var self = this;
    self.route = params.route;
  }

  return { viewModel: AppViewModel, template: template };
});
