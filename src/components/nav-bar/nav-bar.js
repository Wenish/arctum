define(['knockout', 'text!./nav-bar.html'], function(ko, template) {

  function NavBarViewModel(params) {
    var self = this;
    // This viewmodel doesn't do anything except pass through the 'route' parameter to the view.
    // You could remove this viewmodel entirely, and define 'nav-bar' as a template-only component.
    // But in most apps, you'll want some viewmodel logic to determine what navigation options appear.
    self.route = params.route;
    self.currentLanguage = params.currentLanguage;
    self.changeLanguageToGerman = function(){
      self.currentLanguage('de');
    };

    self.changeLanguageToEnglish = function(){
      self.currentLanguage('en');
    };

    self.languageTextsGerman = {
      home: 'Home',
      ranking: 'Rangliste',
      german: 'DE',
      english: 'EN',
      profile: 'Profil',
      likes: 'Gefällt mir',
      following: 'Abonniert',
      stats: 'Stats'
    };

    self.languageTextsEnglish = {
      home: 'Home',
      ranking: 'Ranking',
      german: 'DE',
      english: 'EN',
      profile: 'Profile',
      likes: 'Likes',
      following: 'Following',
      stats: 'Stats'
    };

    self.activeLanguageTexts = ko.computed(function(){
      if(self.currentLanguage() == 'de'){
        return self.languageTextsGerman;
      } else if(self.currentLanguage() == 'en'){
        return self.languageTextsEnglish;
      };
      return self.languageTextsGerman;
    });

    self.dropdownProfileOpen = ko.observable(false);

    self.openDropdownProfile = function(){
      self.dropdownProfileOpen(true);
    }
    self.closeDropdownProfile = function(){
      self.dropdownProfileOpen(false);
      return true;
    }
    self.toggleDropdownProfile = function(){
      self.dropdownProfileOpen(!self.dropdownProfileOpen());
    }
  }

  return { viewModel: NavBarViewModel, template: template };
});
