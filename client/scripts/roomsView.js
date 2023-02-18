// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.handleClick();
    RoomsView.handleChange();
    RoomsView.render();
    $('#rooms select option[value="lobby"]').attr('selected', true);
    // Rooms.getCurrentRoom();
  },

  render: function() {
    // TODO: Render out the list of rooms.
    // gets refreshed every second, so maybe we want to change the .html part and add some logic so it only adds new rooms.
    // $('#rooms select').html('');
    for (let room in Rooms._data) {
      RoomsView.renderRoom(room);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    let $option = $(`<option>${roomname}</option>`);
    $('#rooms select').append($option);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    $('#rooms select').change(function() {
      Rooms.selectRoom($(this).children('option:selected').val());
    });
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.

    $('#rooms button').on('click', function() {
      let roomName = prompt('Enter room name');
      Rooms.add(roomName);
    });

  }

};
