define(['knockout', 'text!./page-profile.html'], function(ko, templateMarkup) {

  function PageProfile(params) {
    var self = this;
    self.path = params.route().path || 'profile';
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  PageProfile.prototype.dispose = function() { };

  return { viewModel: PageProfile, template: templateMarkup };

});
