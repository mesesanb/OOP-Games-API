class Game {
    constructor(_id, title, imageURL, description,releaseDate, genre, publisher) {
        this._id = _id;
        this.title = title;
        this.imageUrl = imageURL;
        this.description = description;
        this.releaseDate = releaseDate;
        this.genre = genre;
        this.publisher = publisher;
    }
}

class GameToPut {
    constructor( title, imageURL, description,releaseDate, genre, publisher) {
        // this._id = _id;
        this.title = title;
        this.imageUrl = imageURL;
        this.description = description;
        this.releaseDate = releaseDate;
        this.genre = genre;
        this.publisher = publisher;
    }
}
var gamesLink = "https://games-world.herokuapp.com"