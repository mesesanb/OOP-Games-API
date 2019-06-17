"use strict"


function listGames(games) { //  function that lists the games fetched
  for (let j = 0; j < games.length; j++) {
    document.getElementById("listOfGames").innerHTML += "<li><img src=" + games[j].imageUrl + " alt=" + games[j].title + " />" + games[j].title +
      '<button id = "delete_' + games[j]._id + '"type="button" class="btn view btn-danger">Delete</button>' +
      '<button id = "edit_' + games[j]._id + '"type="button" class="btn edit btn-secondary">Edit</button>' +
      '<button id = "view_' + games[j]._id + '"type="button" class="btn delete btn-primary">View</button></li>';
  }
}


function listSingleGame(game) {

  document.getElementById("gameCard").innerHTML += '<div class="card single_game " style="width: 30rem;"><img class="card-img-top" src="' + game.imageUrl + '">' +
    '<div class="card-body"><h5 class="card-title">' + game.title + '</h5><p class="card-text">Genre: ' + ' ' +
    game.genre + '</p><p class="card-text">Publisher:' + ' ' + game.publisher + '</p><p class="card-text">Release:' + game.releaseDate +
    '</p><p class="card-text">Description:' + ' ' + game.description + '</p>';

}


function editSingleGame(game) {


  document.getElementById("gameCard").innerHTML += '<div class="card single_game " style="width:30rem;"><img class="card-img-top" src="' + game.imageUrl + '"><br>' +
    '<div class="card-body"><p class="card-text">Image Link:&nbsp<input type="text" id="gameImageURL" class="card-title" value = "' + game.imageUrl + '"></p>' +
    '<p class="card-text">Title:&nbsp<input type="text" id="gameTitle" class="card-title" value = "' + game.title + '"></p><p class="card-text">Genre:&nbsp ' +
    '<input type="text" id="gameGenre" value = "' + game.genre + '"></p><p class="card-text">Publisher:&nbsp<input type="text" id="gamePublisher" class="card-title" value = "' + game.publisher +
    '"></p><p class="card-text">Release:&nbsp<input type="text" id="gameDate" class="card-title" value = "' + game.releaseDate + '"></p><p class="description">Description:&nbsp</p><textarea name = "gameDescription" id="gameDescription" class="cardDescription" rows="6" cols="40" >' + game.description + '</textarea>' +
    '<br><button type="button" id = "saveButton" class="btn btn-success btn-save">SAVE</button></div>';


}


function addGame(e) {
 
  var imageNotAvailable = "https://s3.amazonaws.com/pastperfectonline/museumlogos/missingimages/416/original/noimageavailable.png?1466201775";

  document.getElementById("gameCard").innerHTML += '<div class="card single_game " style="width:30rem;"><img class="card-img-top" src="' + imageNotAvailable + '"><br>' +
    '<div class="card-body"><p class="card-text">Image Link:&nbsp<input type="text" id="gameImageURL" class="card-title" value = "Add image URL"></p>' +
    '<p class="card-text">Title:&nbsp<input type="text" id="gameTitle" class="card-title" value = "Add a game title"></p><p class="card-text">Genre:&nbsp ' +
    '<input type="text" id="gameGenre" value = "Add game genre"></p><p class="card-text">Publisher:&nbsp<input type="text" id="gamePublisher" class="card-title" value = "Add publisher">' +
    '</p><p class="card-text">Release:&nbsp<input type="text" id="gameDate" class="card-title" value = "Release date"></p><p class="description">Description:&nbsp</p><textarea name = "gameDescription" id="gameDescription" class="cardDescription" rows="6" cols="40" >Game descripion ...</textarea>' +
    '<br><button type="button" id = "addButton" class="btn btn-success btn-save">ADD</button></div>';


}


