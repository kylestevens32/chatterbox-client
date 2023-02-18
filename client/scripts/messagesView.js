// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.handleClick();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    $('#chats').html('');
    for (message of Messages._data) {
      MessagesView.renderMessage(message);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    let $message = MessageView.render(message);
    $('#chats').append($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    $('.username').on('click', Friends.toggleStatus);
  }

};