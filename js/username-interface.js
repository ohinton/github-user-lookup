var Username = require('./../js/username.js').usernameModule;

var displayUserInfo = function(username, userLocation, userPhoto) {
  $('#resultName').text("Name: " + username);
  $('#resultLocation').text("Location: " + userLocation);
  $('#resultPhoto').html("<img src='" + userPhoto + "' alt='user avatar' class='img-circle'>");
};

var displayRepoInfo = function(name, description, repoURL, formattedDate) {
  $('.showResults').append("<li>" + "Name: " + "<a target='_blank' href='" + repoURL + "'>" + name + "</a>" + "<br>" + "Description: " + description + "<br>" + "Created: " + formattedDate + "</li>" + "<br>");
};

$(document).ready(function() {
  var currentUsernameObject = new Username();
  $('#submitUsername').click(function() {
    $(".showResults").empty();
    var username = $('#username').val();
    currentUsernameObject.getRepos(username, displayUserInfo, displayRepoInfo);
    });
  });
