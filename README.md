# OOP-Games-API
JavaScript OOP Models/Views &amp; API
API Documentation
Postman Collection:
https://www.getpostman.com/collections/df971fc1c71c76ba2aa1
Base URL: https://games-world.herokuapp.com
● Get All Games
Url: /games
Method: GET
Response: [] - array of games
● Get Game Details
Url: /games/:id
Method: GET
Response: {} - game object
● Update Game
Url: /games/:id
Method: PUT
Payload:
{
title: “new title”
}
You can send in payload object all the keys you want to update the value
for.
● Delete Game
Url: /games/:id
Method: DELETE
● Create Game Entry
Url: /games
Method: POST
Payload:
{
"title" : "Call of Duty®: WWII Returned",
"releaseDate" : 1333929600,
"genre" : "First Person Shooter",
"publisher" : "Activision",
"imageUrl" :
"https://psmedia.playstation.com/is/image/psmedia/call-of-duty-wwii-two-column-01-ps4-eu-19apr
17?$TwoColumn_Image$"
}
