define(['knockout', 'text!./card.html'], function(ko, templateMarkup) {

  function CardViewModel(params) {
    var self = this;
    self.data = params.data;
    self.parent = params.parent;

    self.currentLanguage = params.currentLanguage;

    self.cardLoading = ko.observable(true);

    self.deleteCard = function(){
      self.parent.deleteCard(self.data);
    };

    self.text = ko.observable(self.data);

    self.languageTextsGerman = {
      loaded: 'Geladen...',
      maxLength: 'Maximallänge ist 15!',
      delete: 'Löschen'
    };

    self.languageTextsEnglish = {
      loaded: 'Loaded...',
      maxLength: 'Max length is 15!',
      delete: 'Delete'
    };

    self.activeLanguageTexts = ko.computed(function(){
      if(self.currentLanguage() == 'de'){
        return self.languageTextsGerman;
      } else if(self.currentLanguage() == 'en'){
        return self.languageTextsEnglish;
      };
      return self.languageTextsGerman;
    });

    var rndNumber = Math.floor(Math.random() * (5000 - 200 + 1)) + 200;

    setTimeout(function(){
      self.cardLoading(false);
    }, rndNumber);
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  CardViewModel.prototype.dispose = function() { };

  return { viewModel: CardViewModel, template: templateMarkup };

});
