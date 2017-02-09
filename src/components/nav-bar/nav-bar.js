define(['knockout', 'text!./nav-bar.html'], function(ko, template) {

  function NavBarViewModel(params) {
    var self = this;
    // This viewmodel doesn't do anything except pass through the 'route' parameter to the view.
    // You could remove this viewmodel entirely, and define 'nav-bar' as a template-only component.
    // But in most apps, you'll want some viewmodel logic to determine what navigation options appear.
    self.params = params;
    self.route = params.route;
    self.activeLanguage = params.activeLanguage;
    
    self.changeLanguageToGerman = function(){
      self.activeLanguage('german');
    };

    self.changeLanguageToEnglish = function(){
      self.activeLanguage('english');
    };
  }

  return { viewModel: NavBarViewModel, template: template };
});
