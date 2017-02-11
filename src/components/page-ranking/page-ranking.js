define(['knockout', 'text!./page-ranking.html'], function(ko, templateMarkup) {

  function PageRankingViewModel(params) {
    var self = this;

    self.activeLanguage = params.activeLanguage;
    self.rankings = ko.observableArray([]);
    self.pageLoading = ko.observable(true);

    self.languageTextsGerman = {
      firstName: 'Vorname',
      lastName: 'Nachname',
      username: 'Benutzername',
      ranking: 'Rangliste',
      refresh: 'Aktualisieren'
    };

    self.languageTextsEnglish = {
      firstName: 'First Name',
      lastName: 'Last Name',
      username: 'Username',
      ranking: 'Ranking',
      refresh: 'Refresh'
    };

    self.activeLanguageTexts = ko.computed(function(){
      if(self.activeLanguage() == 'de'){
        return self.languageTextsGerman;
      } else if(self.activeLanguage() == 'en'){
        return self.languageTextsEnglish;
      };
      return self.languageTextsGerman;
    });

    var rankingData = [
      {
        firstName: 'Larry',
        lastName: 'the Bird',
        username: '@twitter'
      },
      {
        firstName: 'Bert',
        lastName: 'Royal',
        username: '@robert'
      },
      {
        firstName: 'Timmy',
        lastName: 'le greyer',
        username: '@wein'
      }
    ]

    self.getRankings = function(){
      self.pageLoading(true);
      setTimeout(function(){
        self.rankings(rankingData);
        self.pageLoading(false);
      },1000);
    };
    self.getRankings();
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  PageRankingViewModel.prototype.dispose = function() { };

  return { viewModel: PageRankingViewModel, template: templateMarkup };

});
