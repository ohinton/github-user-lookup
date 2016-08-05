var apiKey = require('./../.env').apiKey;

function Username(){
}

Username.prototype.getRepos = function(username, displayFunction, detailsFunction){
  $.get('https://api.github.com/users/'+ username +'?access_token=' + apiKey).then(function(response){
    var reposLink = response.repos_url;
    displayFunction(response.name, response.location, response.avatar_url);
  $.get(reposLink + "?page=1&per_page=500").then(function(response){
    response.forEach(function(repo){
      var formattedDate = moment(repo.created_at).format('MMM D, YYYY @ h:mm a');
      detailsFunction(repo.name, repo.description, repo.html_url, formattedDate)
      });
    }).fail(function(error){
    $('#showResults').text(error.responseJSON.message);
    });
  });
};

exports.usernameModule = Username;
