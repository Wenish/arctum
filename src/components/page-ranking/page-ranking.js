define(['knockout', 'text!./page-ranking.html'], function(ko, templateMarkup) {

  function PageRanking(params) {
    var self = this;

    self.params = params;
    self.activeLanguage = params.activeLanguage;
    self.pageLoading = ko.observable(true);


    self.languageTextsGerman = {
      firstName: 'Vorname',
      lastName: 'Nachname',
      username: 'Benutzername'
    };

    self.languageTextsEnglish = {
      firstName: 'First Name',
      lastName: 'Last Name',
      username: 'Username'
    };

    self.activeLanguageTexts = ko.computed(function(){
      if(self.activeLanguage() == 'german'){
        return self.languageTextsGerman;
      } else if(self.activeLanguage() == 'english'){
        return self.languageTextsEnglish;
      };
      return self.languageTextsGerman;
    });

    console.log(params)
    setTimeout(function(){
      self.pageLoading(false);
    },2000);
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  PageRanking.prototype.dispose = function() { };

  return { viewModel: PageRanking, template: templateMarkup };

});
