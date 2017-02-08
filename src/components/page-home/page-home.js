define(["knockout", "text!./page-home.html"], function(ko, PageHomeTemplate) {

  function PageHomeViewModel(route) {
    this.message = ko.observable('Welcome to yo ko test!');
  }

  PageHomeViewModel.prototype.doSomething = function() {
    this.message('You invoked doSomething() on the viewmodel.');
  };

  return { viewModel: PageHomeViewModel, template: PageHomeTemplate };

});
