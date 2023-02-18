// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  refresh: function(data) {
    Messages._data = data.map((message) => {
      let simplifiedMessage = {
        username: message.username,
        text: message.text,
        roomname: message.roomname
      };
      // Rooms.add(message.roomname);
      return simplifiedMessage;
    });
    MessagesView.render();
  },

  send: function(event) {
    let newMessage = {
      username: App.username,
      text: $('#message').val(),
      roomname: Rooms._currentRoom
    };
    Parse.create(newMessage);
  }
};
