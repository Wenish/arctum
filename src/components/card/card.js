define(['knockout', 'text!./card.html'], function(ko, templateMarkup) {

  function CardViewModel(params) {
    var self = this;

    self.cardLoading = ko.observable(true);

    self.text = ko.observable('');

    self.locale = params.locale;

    self.languageTextsGerman = {
      loaded: 'Geladen...',
      maxLength: 'Maximallänge ist 15!'
    };

    self.languageTextsEnglish = {
      loaded: 'Loaded...',
      maxLength: 'Max length is 15!!'
    };

    self.activeLanguageTexts = ko.computed(function(){
      if(self.locale() == 'de'){
        return self.languageTextsGerman;
      } else if(self.locale() == 'en'){
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
