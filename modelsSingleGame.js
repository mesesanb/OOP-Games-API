"use strict"

var actionToTake = localStorage.getItem("action"); // we read from the local storage the action from the pressed button
var gameViewId = localStorage.getItem("gameViewId"); //// we read from the local storage the gameId from the pressed button
var gameToList = new Game(); //ne variable type of game



switch (actionToTake) { //we read the action that was pressed and now we compare it 
    case "view": getGame(gameViewId);
        break;
    case "edit": editGame(gameViewId);
        break;
    case "new" : editGame(gameViewId);
    break;

}

function getGame(gameViewId) {

    fetch(gamesLink + "/games/" + gameViewId)
        .then(resp => resp.json())
        .then(function (response) { // we create an array of Game objects

            gameToList = new Game(response._id, response.title, response.imageUrl, response.description, response.releaseDate, response.genre, response.publisher);
        })
        .then(function () {

            listSingleGame(gameToList); //the function from views.js that lists the page for one game that is not editable
        })
}

function editGame(gameViewId) {
   
 if (gameViewId !="000") {
    fetch(gamesLink + "/games/" + gameViewId)
        .then(resp => resp.json())
        .then(function (response) { // we create an array of Game objects

            gameToList = new Game(response._id, response.title, response.imageUrl, response.description, response.releaseDate, response.genre, response.publisher);
        })
        .then(function () {

            editSingleGame(gameToList); //the function from views.js that lists the page for one game that editable, with <input type ="text" and <textarea>
        })
        .then(function () {
            // we listen for the "save button"
            listenSingleDOM();

        })
    } else {  
            console.log ("add");
            addGame();
            listenSingleDOM();
           }
        
}
function getDataFromDom() {
    
    var gameTile = document.getElementById("gameTitle").value;
    var gameImageURL = document.getElementById("gameImageURL").value;
    var gameDescription = document.getElementById("gameDescription").value;
    var gameRelease = parseInt(document.getElementById("gameDate").value);
    var gameGenre = document.getElementById("gameGenre").value;
    var gamePublisher = document.getElementById("gamePublisher").value;

    var  newGame = new GameToPut(gameTile, gameImageURL, gameDescription, gameRelease, gameGenre, gamePublisher);
    return newGame;
}


function listenSingleDOM() { //listening if the SAVE OR ADD button was pressed
   
    
    if (gameViewId !="000") { // if gameViewId!=="000" it means that we edit an existing game
     document.getElementById("saveButton").addEventListener("click", function (e) {

         var newGameToPublish = getDataFromDom();
         
         var gameID = gameViewId;

        if (isNaN(newGameToPublish.releaseDate)) {  // check if date is a number
            alert("Date must be a number");
            document.getElementById("gameDate").focus();
            return false;
        }
        $.ajax({
            type: 'PUT',
            dataType: 'json', // Set datatype - affects Accept header
            url: gamesLink + '/games/' + gameID,
            data: newGameToPublish,
            success: () => {

                alert('Game  was edited succesfully');
                
                viewGame(gameViewId);
            }
        })


    });} else { // if gameViewId =="000" it means that we are adding a new game
        
         document.getElementById("addButton").addEventListener("click", function (e) {

       
        
            var newGameToPublish = getDataFromDom();
            console.log ("adddddd", newGameToPublish);

       if (isNaN(newGameToPublish.releaseDate)) {  // check if date is a number
           alert("Date must be a number");
           document.getElementById("gameDate").focus();
           return false;
       }
       $.ajax({
           type: 'POST',
           dataType: 'json', // Set datatype - affects Accept header
           url: gamesLink + '/games',
           data: newGameToPublish,
           success: () => {

               alert('Game  was added succesfully');
               window.open ('01listgames.html', "_blank");
           }
       })


   });
}
}

