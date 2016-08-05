var apiKey = require('./../.env').apiKey;

function Username(){

}


Username.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/'+ username +'?access_token=' + apiKey).then(function(response){
    var reposLink = response.repos_url;

  $.get(reposLink).then(function(response){
    response.forEach(function(repo){
    var name = repo.name;
    var description = repo.description;
    $('.showResults').append("<li>" + name + ": " + description + "</li>");
  });
      }).fail(function(error){
      $('#showResults').text(error.responseJSON.message);
    });
  });
};

exports.usernameModule = Username;
