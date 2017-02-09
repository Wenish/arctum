define(['knockout', 'text!./card.html'], function(ko, templateMarkup) {

  function CardViewModel(params) {
    var self = this;

    self.cardLoading = ko.observable(true);

    self.activeLanguage = params.activeLanguage;

    self.languageTextsGerman = {
      loaded: 'Geladen...'
    };

    self.languageTextsEnglish = {
      loaded: 'Loaded...'
    };

    self.activeLanguageTexts = ko.computed(function(){
      if(self.activeLanguage() == 'german'){
        return self.languageTextsGerman;
      } else if(self.activeLanguage() == 'english'){
        return self.languageTextsEnglish;
      };
      return self.languageTextsGerman;
    });

    var rndNumber = Math.floor(Math.random() * (2000 - 200 + 1)) + 200;

    setTimeout(function(){
      self.cardLoading(false);
    }, rndNumber);
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  CardViewModel.prototype.dispose = function() { };

  return { viewModel: CardViewModel, template: templateMarkup };

});
