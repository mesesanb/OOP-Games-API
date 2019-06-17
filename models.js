"use strict"




var gameList = []; // array to put games into it
getGames();
function getGames() {

    fetch(gamesLink + "/games")
        .then(resp => resp.json())
        .then(function (response) { // we create an array of Game objects
            for (let i = 0; i < response.length; i++) {
                var gameToPutInArray = new Game(response[i]._id, response[i].title, response[i].imageUrl, response[i].description, response[i].releaseDate, response[i].genre, response[i].publisher);
                gameList.push(gameToPutInArray);
            }

        })
        .then(function () {

            listGames(gameList);
        })
        .then(function () {
            listenDOM();
        })


}

function listenDOM() {
    document.getElementById("container").addEventListener("click", function (e) { //we listen on the ul element  which button was pressed
        if (e.target.matches('.btn')) {
            var action = e.target.id.split("_", 2)[0];
            var gameId = e.target.id.split("_", 2)[1];
            
            switch (action) {
                case "edit": editGame(gameId);
                    break;
                case "view": viewGame(gameId);
                    break;
                case "delete": deleteGame(gameId);
                    break;
                case "new" : newGame(gameId);
                    break;
            }
        }

    })

}

function editGame(gameId) {
    
    localStorage.setItem("action", "edit"); //we write on local storage what action is to be taken 
    localStorage.setItem("gameViewId",gameId);
    window.open ('editSingleGame.html', "_blank");
    
}

function newGame(gameId) {
    
    localStorage.setItem("action", "new"); //we write on local storage what action is to be taken 
    localStorage.setItem("gameViewId",gameId);
    window.open ('editSingleGame.html', "_blank");
    
}

function viewGame(gameId) {
    
    localStorage.setItem("action", "view");//we write on local storage what action is to be taken 
    localStorage.setItem("gameViewId",gameId);
    window.open ('singleGame.html', "_blank");
}

function deleteGame(gameId) {
    
    var answer = confirm("You want to delete a game?") // we check if the user really wants to delete the game
    if (answer == true) {
        fetch(gamesLink + "/games/" + gameId, {
            method: 'DELETE'

        })
            .then(response => {
                response.json();
                alert('Game was deleted from DB');
                location.reload(); //refresh 
            })
            .then(response => console.log(response));
    }

}

