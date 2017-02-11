define(["knockout", "text!./page-home.html"], function(ko, PageHomeTemplate) {

  function PageHomeViewModel(params) {
    var self = this;
    self.currentLanguage = params.currentLanguage;
  }

  return { viewModel: PageHomeViewModel, template: PageHomeTemplate };

});
