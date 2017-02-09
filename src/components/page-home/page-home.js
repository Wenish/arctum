define(["knockout", "text!./page-home.html"], function(ko, PageHomeTemplate) {

  function PageHomeViewModel(route) {
    var self = this;
    self.message = ko.observable('Welcome to Arctum!');
  }

  PageHomeViewModel.prototype.doSomething = function() {
    this.message('Clicked.');
  };

  return { viewModel: PageHomeViewModel, template: PageHomeTemplate };

});
