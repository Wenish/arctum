define(['knockout', 'text!./row-ranking.html'], function(ko, templateMarkup) {

  function RowRanking(params) {
    var self = this;
    self.index = params.index
    self.firstName = params.data.firstName;
    self.lastName = params.data.lastName;
    self.username = params.data.username;
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  RowRanking.prototype.dispose = function() { };

  return { viewModel: RowRanking, template: templateMarkup };

});
