define(['knockout', 'text!./page-ranking.html'], function(ko, templateMarkup) {

  function PageRanking(params) {
    var self = this;

    self.pageLoading = ko.observable(true);

    setTimeout(function(){
      self.pageLoading(false);
    },2000);
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  PageRanking.prototype.dispose = function() { };

  return { viewModel: PageRanking, template: templateMarkup };

});
