var Username = require('./../js/username.js').usernameModule;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  var currentUsernameObject = new Username();
  $('#submitUsername').click(function() {
    var username = $('#username').val();
    currentUsernameObject.getRepos(username);
    });
  });
