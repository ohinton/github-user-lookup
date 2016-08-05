var Username = require('./../js/username.js').usernameModule;


$(document).ready(function() {
  var currentUsernameObject = new Username();
  $('#submitUsername').click(function() {
    $(".showResults").empty();
    var username = $('#username').val();
    currentUsernameObject.getRepos(username);
    });
  });
