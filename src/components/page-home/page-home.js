define(["knockout", "text!./page-home.html"], function(ko, PageHomeTemplate) {

  function PageHomeViewModel(params) {
    var self = this;
    self.message = ko.observable('Welcome to Arctum!');
    console.log(params)
  }

  PageHomeViewModel.prototype.doSomething = function() {
    this.message('Clicked.');
  };

  return { viewModel: PageHomeViewModel, template: PageHomeTemplate };

});
