// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.feedRefresh();

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    setInterval(App.feedRefresh, 10000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      Messages.refresh(data);
      Rooms.refresh(data);
      Rooms.getCurrentRoom();
    });
    callback();
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  feedRefresh: function() {
    App.startSpinner();
    App.fetch(App.stopSpinner);

  }
};
