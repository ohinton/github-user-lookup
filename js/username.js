var apiKey = require('./../.env').apiKey;

function Username(){

}


Username.prototype.getRepos = function(username, displayFunction){
  $.get('https://api.github.com/users/'+ username +'?access_token=' + apiKey).then(function(response){
    var reposLink = response.repos_url;
    displayFunction(response.name, response.location, response.avatar_url);

  $.get(reposLink + "?page=1&per_page=500").then(function(response){
    response.forEach(function(repo){
    var name = repo.name;
    var description = repo.description;
    var repoURL = repo.html_url;
    var createdAt = repo.created_at;
    var formattedDate = moment(createdAt).format('MMM D, YYYY @ h:mm a');

    $('.showResults').append("<li>" + "Name: " + "<a target='_blank' href='" + repoURL + "'>" + name + "</a>" + "<br>" + "Description: " + description + "<br>" + "Created: " + formattedDate + "</li>" + "<br>");
  });
      }).fail(function(error){
      $('#showResults').text(error.responseJSON.message);
    });
  });
};

exports.usernameModule = Username;
