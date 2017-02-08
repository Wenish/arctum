define(['knockout', 'text!./app.html'], function(ko, template) {

  function AppViewModel(params) {
    this.route = params.route;
  }

  return { viewModel: AppViewModel, template: template };
});
