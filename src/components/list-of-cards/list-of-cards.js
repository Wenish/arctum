define(['knockout', 'text!./list-of-cards.html'], function(ko, templateMarkup) {

  function ListOfCards(params) {
    var self = this;
    self.currentLanguage = params.currentLanguage;

    self.cards = ko.observableArray([1,2,3,4]);

    self.deleteCard = function(obj){
      self.cards.remove(obj);
    };

    self.languageTextsGerman = {
      message: 'Das ist eine einfache App, um dir ein paar leide knockout Features zu zeigen.',
      addCard: 'Karte hinzufügen',
    };

    self.languageTextsEnglish = {
      message: 'This is a simple app to show you some great knockout features.',
      addCard: 'Add Card'
    };

    self.activeLanguageTexts = ko.computed(function(){
      if(self.currentLanguage() == 'de'){
        return self.languageTextsGerman;
      } else if(self.currentLanguage() == 'en'){
        return self.languageTextsEnglish;
      };
      return self.languageTextsGerman;
    });
  }

  ListOfCards.prototype.addCard = function() {
    this.cards.push(this.cards().length + 1)
  };
  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  ListOfCards.prototype.dispose = function() { };

  return { viewModel: ListOfCards, template: templateMarkup };

});
