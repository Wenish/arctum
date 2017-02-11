define(["knockout", "text!./page-home.html"], function(ko, PageHomeTemplate) {

  function PageHomeViewModel(params) {
    var self = this;
    self.cards = ko.observableArray([1,2,3,4]);

    self.locale = params.locale;

    self.languageTextsGerman = {
      message: 'Das ist eine einfache App, um dir ein paar leide knockout Features zu zeigen.',
      addCard: 'Karte hinzufügen',
    };

    self.languageTextsEnglish = {
      message: 'This is a simple app to show you some great knockout features.',
      addCard: 'Add Card'
    };

    self.activeLanguageTexts = ko.computed(function(){
      if(self.locale() == 'de'){
        return self.languageTextsGerman;
      } else if(self.locale() == 'en'){
        return self.languageTextsEnglish;
      };
      return self.languageTextsGerman;
    });
  }

  PageHomeViewModel.prototype.addCard = function() {
    this.cards.push(this.cards().length + 1)
  };

  return { viewModel: PageHomeViewModel, template: PageHomeTemplate };

});
