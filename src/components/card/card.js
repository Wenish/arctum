define(['knockout', 'text!./card.html'], function(ko, templateMarkup) {

  function CardViewModel(params) {
    var self = this;

    self.cardLoading = ko.observable(true);

    setTimeout(function(){
      self.cardLoading(false);
    },2000);
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  CardViewModel.prototype.dispose = function() { };

  return { viewModel: CardViewModel, template: templateMarkup };

});
