define(['knockout', 'text!./page-profile.html'], function(ko, templateMarkup) {

  function PageProfile(params) {
    var self = this;
    self.path = params.route().path || 'profile';
    self.activeLanguage = params.activeLanguage;

    self.languageTextsGerman = {
      profile: 'Profil',
      likes: 'Gefällt mir',
      following: 'Abonniert'
    };

    self.languageTextsEnglish = {
      profile: 'Profile',
      likes: 'Likes',
      following: 'Following'
    };

    self.activeLanguageTexts = ko.computed(function(){
      if(self.activeLanguage() == 'de'){
        return self.languageTextsGerman;
      } else if(self.activeLanguage() == 'en'){
        return self.languageTextsEnglish;
      };
      return self.languageTextsGerman;
    });
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  PageProfile.prototype.dispose = function() { };

  return { viewModel: PageProfile, template: templateMarkup };

});
