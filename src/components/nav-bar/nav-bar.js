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

    self.languageTextsGerman = {
      home: 'Home',
      ranking: 'Rangliste',
      german: 'Deutsch',
      english: 'Englisch'
    };

    self.languageTextsEnglish = {
      home: 'Home',
      ranking: 'Ranking',
      german: 'German',
      english: 'English'
    };

    self.activeLanguageTexts = ko.computed(function(){
      if(self.activeLanguage() == 'german'){
        return self.languageTextsGerman;
      } else if(self.activeLanguage() == 'english'){
        return self.languageTextsEnglish;
      };
      return self.languageTextsGerman;
    });
  }

  return { viewModel: NavBarViewModel, template: template };
});
