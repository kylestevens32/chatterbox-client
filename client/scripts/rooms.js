// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {lobby: true},
  _currentRoom: null,

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function(roomname) {
    if (roomname !== null && roomname !== undefined) { // && Rooms._data[roomname] === undefined) {
      Rooms._data[roomname] = true;
      RoomsView.renderRoom(roomname);
    }
  },

  selectRoom: function(inputSelected) {
    Rooms._currentRoom = inputSelected;
    console.log(Rooms._currentRoom);
  },

  getCurrentRoom: function() {
    Rooms._currentRoom = $('#rooms select').children('option:selected').val();
  },

  refresh: function(data) {
    data.forEach((message) => {
      Rooms.add(message.roomname);
    });
    // roomsView.render();
  }

};