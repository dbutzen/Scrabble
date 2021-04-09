//const { imgcrossorigin } = require("modernizr");

var id_placeholder;
var tray;

//var gameArray = [];
var tileBag = [];
var equalColumn = true;
var equalRow = true;
var players = [];
var firstPlay = true;
var turnCounter = 1;
var currentPlayerTurn = 1;
var numPlayers = 1;
var selectedTile;
var tile;
var placements = [];
var wordsPlayed = [];
var words = [];
var scoreCounter;
var gameArray = [];
var image;
var lastWord = "test";

//REMINDERS
//---Make sure when a multiplier is used to remove it from the board---


//----------------Tile Movement------------------
function SelectedTile(value, location) {
    this.value = value;
    this.location = location; //Locations are "hand", board index value
}
function reply_click(clicked_id) {
    id_placeholder = clicked_id;
}
$(".board-tile").click(function () {
    if (selectedTile == "hand") {
        selectedTile.location = id_placeholder;
    }
});
$(".hand").click(function () {
    selectedTile = new SelectedTile();
    selectedTile.Value = this.Value;
    selectedTile.location = "hand";
});
function MovePiece() {
    var hand = document.getElementById("handLetter1").innerHTML;
    alert('piece taken!');

}
function letterClicked(elem) {
    // hide input layer
    document.getElementById("input_container").style.display = "none";
    // get target field
    var target = document.getElementsByClassName("letter hand")[0];
    target.classList.remove("letter hand");
    // get clicked letter
    var letter = elem.srcElement.innerHTML;
    // get target position
    var targetPosition = target.id.substring(1, target.id.length).split("_");
    var x = parseInt(targetPosition[0]) - 1;
    var y = parseInt(targetPosition[1]) - 1;
}

//----------------Tile to Hand------------------
/*function newBag() {
    tileBag = [
        { letter: "A", value: 1, count: 9 },
        { letter: "B", value: 3, count: 2 },
        { letter: "C", value: 3, count: 2 },
        { letter: "D", value: 2, count: 4 },
        { letter: "E", value: 1, count: 12 },
        { letter: "F", value: 4, count: 2 },
        { letter: "G", value: 2, count: 3 },
        { letter: "H", value: 4, count: 2 },
        { letter: "I", value: 1, count: 9 },
        { letter: "J", value: 8, count: 1 },
        { letter: "K", value: 5, count: 1 },
        { letter: "L", value: 1, count: 4 },
        { letter: "M", value: 3, count: 2 },
        { letter: "N", value: 1, count: 6 },
        { letter: "O", value: 1, count: 8 },
        { letter: "P", value: 3, count: 2 },
        { letter: "Q", value: 10, count: 1 },
        { letter: "R", value: 1, count: 6 },
        { letter: "S", value: 1, count: 4 },
        { letter: "T", value: 1, count: 6 },
        { letter: "U", value: 1, count: 4 },
        { letter: "V", value: 4, count: 2 },
        { letter: "W", value: 4, count: 2 },
        { letter: "X", value: 8, count: 1 },
        { letter: "Y", value: 4, count: 2 },
        { letter: "Z", value: 10, count: 1 },
        { letter: "blank", value: 0, count: 2 }
    ]
}*/

function newBag() {
    var newBagTilesCount = 0;
    for (var i = newBagTilesCount; i < 9; i++)
    {
        tileBag[i] = { Letter: "A", Value: 1 };
    }
    newBagTilesCount += 9;
    for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "B", Value: 3 };
    }
    newBagTilesCount += 2;
    for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "C", Value: 3 };
    }
    newBagTilesCount += 2;
    for (var i = newBagTilesCount; i < 4 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "D", Value: 2 };
    }
    newBagTilesCount += 4;
    for (var i = newBagTilesCount; i < 12 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "E", Value: 1 };
    }
    newBagTilesCount += 12;
    for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "F", Value: 4 };
    }
    newBagTilesCount += 2;
    for (var i = newBagTilesCount; i < 3 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "G", Value: 2 }
    }
    newBagTilesCount += 3;
    for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "H", Value: 4 };
    }
    newBagTilesCount += 2;
    for (var i = newBagTilesCount; i < 9 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "I", Value: 1 };
    }
    newBagTilesCount += 9;
    for (var i = newBagTilesCount; i < 1 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "J", Value: 8 };
    }
    newBagTilesCount += 1;
    for (var i = newBagTilesCount; i < 1 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "K", Value: 5 };
    }
    newBagTilesCount += 1;
    for (var i = newBagTilesCount; i < 4 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "L", Value: 1 };
    }
    newBagTilesCount += 4
    for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "M", Value: 3 };
    }
    newBagTilesCount += 2;
    for (var i = newBagTilesCount; i < 6 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "N", Value: 1 };
    }
    newBagTilesCount += 6;
    for (var i = newBagTilesCount; i < 8 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "O", Value: 1 };
    }
    newBagTilesCount += 8;
    for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "P", Value: 3 };
    }
    newBagTilesCount += 2;
    for (var i = newBagTilesCount; i < 1 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "Q", Value: 10 };
    }
    newBagTilesCount += 1;
    for (var i = newBagTilesCount; i < 6 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "R", Value: 1 };
    }
    newBagTilesCount += 6;
    for (var i = newBagTilesCount; i < 4 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "S", Value: 1 };
    }
    newBagTilesCount += 4;
    for (var i = newBagTilesCount; i < 6 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "T", Value: 1 };
    }
    newBagTilesCount += 6;
    for (var i = newBagTilesCount; i < 4 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "U", Value: 1 };
    }
    newBagTilesCount += 4;
    for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "V", Value: 4 };
    }
    newBagTilesCount += 2;
    for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "W", Value: 4 };
    }
    newBagTilesCount += 2;
    for (var i = newBagTilesCount; i < 1 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "X", Value: 8 };
    }
    newBagTilesCount += 1;
    for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "Y", Value: 4 };
    }
    newBagTilesCount += 2;
    for (var i = newBagTilesCount; i < 1 + newBagTilesCount; i++)
    {
        tileBag[i] = { Letter: "Z", Value: 10 };
    }
    newBagTilesCount += 1;
    for (var i = 0; i < 2; i++)
    {
        tileBag[i] = { Letter: "Blank", Value: 0 };
    }
}

// gameArray uses 0-16 instead of 0-14 in order to provide a cushion for logic
function initArray() {
    /*for (var i = 0; i < 17; i++) {
        for (var j = 0; j < 17; j++) {
            gameArray[i][j] = { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false };
        }*/
    
        gameArray =
        [
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
            ],
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
                ],
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
                ],
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
                ],
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
                ],
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
                ],
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
                ],
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
                ],
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
                ],
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
                ],
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
                ],
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
                ],
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
                ],
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
                ],
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
                ],
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
                ],
            [
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false },
                { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false }
            ]
    ]


        // Triple word denoted TW, same as class in html
        gameArray[1][1].Bonus = "TW";
        gameArray[1][8].Bonus = "TW";
        gameArray[1][15].Bonus = "TW";
        gameArray[8][1].Bonus = "TW";
        gameArray[8][15].Bonus = "TW";
        gameArray[15][1].Bonus = "TW";
        gameArray[15][8].Bonus = "TW";
        gameArray[15][15].Bonus = "TW";

        //Double Word
        gameArray[2][2].Bonus = "DW";
        gameArray[2][14].Bonus = "DW";
        gameArray[3][3].Bonus = "DW";
        gameArray[3][13].Bonus = "DW";
        gameArray[4][4].Bonus = "DW";
        gameArray[4][12].Bonus = "DW";
        gameArray[5][5].Bonus = "DW";
        gameArray[5][11].Bonus = "DW";
        gameArray[8][8].Bonus = "DW";
        gameArray[11][5].Bonus = "DW";
        gameArray[11][11].Bonus = "DW";
        gameArray[12][4].Bonus = "DW";
        gameArray[12][12].Bonus = "DW";
        gameArray[13][3].Bonus = "DW";
        gameArray[15][1].Bonus = "DW";
        gameArray[15][1].Bonus = "DW";
        gameArray[15][1].Bonus = "DW";

        //Double Letter
        gameArray[1][4].Bonus = "DL";
        gameArray[1][12].Bonus = "DL";
        gameArray[3][6].Bonus = "DL";
        gameArray[3][8].Bonus = "DL";
        gameArray[4][1].Bonus = "DL";
        gameArray[4][7].Bonus = "DL";
        gameArray[4][15].Bonus = "DL";
        gameArray[7][3].Bonus = "DL";
        gameArray[7][7].Bonus = "DL";
        gameArray[7][9].Bonus = "DL";
        gameArray[7][13].Bonus = "DL";
        gameArray[8][4].Bonus = "DL";
        gameArray[8][12].Bonus = "DL";
        gameArray[9][3].Bonus = "DL";
        gameArray[9][7].Bonus = "DL";
        gameArray[9][9].Bonus = "DL";
        gameArray[9][13].Bonus = "DL";
        gameArray[12][1].Bonus = "DL";
        gameArray[12][8].Bonus = "DL";
        gameArray[12][15].Bonus = "DL";
        gameArray[13][7].Bonus = "DL";
        gameArray[13][9].Bonus = "DL";
        gameArray[15][4].Bonus = "DL";
        gameArray[15][12].Bonus = "DL";

        //Triple Letter
        gameArray[2][6].Bonus = "TL";
        gameArray[2][10].Bonus = "TL";
        gameArray[6][2].Bonus = "TL";
        gameArray[6][6].Bonus = "TL";
        gameArray[6][10].Bonus = "TL";
        gameArray[6][14].Bonus = "TL";
        gameArray[10][2].Bonus = "TL";
        gameArray[10][6].Bonus = "TL";
        gameArray[10][10].Bonus = "TL";
        gameArray[10][14].Bonus = "TL";
        gameArray[14][6].Bonus = "TL";
        gameArray[14][10].Bonus = "TL";

    
}


// Selecting a random tile from the tile bag, returns either tile letter or empty, pushes tile to virtual player hand
/*function selectTileFromBag(playerHandLength, playerNum) {
    if (tileBag.length > 0) {
        var total = 0;
        var i;

        //loop to calculate total tiles remaining
        for (i = 0; i < tileBag.length; i++) {
            total += tileBag[i].count;
        }
        alert(total);
        //selects a value from 0 to (total tiles - 1), the represents the selected tile
        var selectedValue = Math.floor(Math.random() * total);
        var tileCount = 0;
        // loop to use selectedvalue to grab the correct tile
        // Loops through each letter and checks if that letter is selected. Example:
        // If selectedTile is 12, first iteration will count A's as 9, see 9 is less then 12, 
        // and add that 9 to the total count. It will then work on B. The tileCount will go to 11 (9 + 2).
        // the logic sees 11 is less than 12. It will then work on C. The tileCount will go to 13 (11 + 2).
        // the logic sees 13 is greater than the selectedValue of 12. It then decrements the count of C, adds
        // C to the current player hand as a tile object (with useless count value), and returns the letter C.
        // The total length of bag is now 1 less.
        for (i = 0; i < 27; i++) {
            // if this is selected value
            if (selectedValue < (tileCount + tileBag[i].count)) {
                tileBag[i].count--;
                players[playerNum].hand.push(tileBag[i]);
                addTileToHand(playerHandLength, tileBag[i].letter);
                return tileBag[i].letter;
            }
            // else
            tileCount += tileBag[i].count;
        }
    }
    // Only returns this if bag is empty
    return "empty";
}
*/
function selectTileFromBag(playerHandLength, playerNum) {
    if (tileBag.length > 0) {
        var i;
        //Select a value from 0 to length - 1
        var selectedValue = Math.floor(Math.random() * tileBag.length);
        var letter = tileBag[selectedValue].letter;
        //Push toplayer
        players[playerNum].hand.push(tileBag[selectedValue]);
        //Add to hand
        addTileToHand(playerHandLength, tileBag[selectedValue].Letter);
        //Remove from bag
        tileBag.splice(selectedValue, 1);
        return letter;
        
       
    }
    // Only returns this if bag is empty
    return "empty";
}

//function LoadImage(tile) {
//    var letter = tile;
//    document[tile].srcElement = letter
//}

//Adds physical tile to physical player hand
function addTileToHand(tileNum, text) {
    var letters = document.createElement("DIV");
    tray = document.getElementById("tray-container");

    letters.id = "handLetter" + (tileNum + 1);
    letters.className = "hand-letter";
    letters.style.cursor = "pointer";
    letters.onclick = function () { HandClicked(this.id); };
    letters.innerHTML = '<img class = "hand-letter" alt=' + text + ' title = ' + text + ' src = "../Images/' + text + '.png" />';
    letters.title = text;
    tray.appendChild(letters);

}

//-------------Game Initialization---------------------
function gameStart() {
    reset();
    initArray();
    newBag();
    //player setup must happen after bag is initialized
    playerSetup(numPlayers);
    //GetImage();
}

// Resets game to initial start point
function reset() {
    tileBag = [];
    equalColumn = true;
    equalRow = true;
    players = [];
    firstPlay = true;
    turnCounter = 1;
}

// 
function playerSetup(playerCount) {
    var i;
    for (i = 0; i < playerCount; i++) {
        initializePlayer(i + 1);
    }
}
function initializePlayer(num) {
    var player = { playerNumber: num, score: 0, hand: [] }
    players.push(player)
    while (player.hand.length < 7) {
        selectTileFromBag(player.hand.length, 0);
        //if (tile == "empty") {
        //    //Should never happen
        //}
        //player.hand.push(tile);
    }
}


//------------------Hand to Board Tile Placement-----------------------
var hand;
var piece;
// function to get the letter of the tile in the tray that is clicked
function HandClicked(id) {

    hand = document.getElementById(id).innerHTML;
    piece = document.getElementById(id);
}
// function to place letter in hand on to board
function BoardClicked(id) {
    
    //Add to array
    var firstLetter = id.charAt(0);
    var first = getNumberId(firstLetter);
    var secondLetter = id.charAt(1);
    var second = getNumberId(secondLetter);
    if (gameArray[first][second].HasTile == false) {
        // Get cell of table to manipulate
        document.getElementById(id).innerHTML = hand;
        // Array logic
        //gameArray[first][second].Tile.Letter = document.getElementById(id).textContent;
        gameArray[first][second].Tile.Letter = hand.charAt(30);
        alert(hand.charAt(30));
        gameArray[first][second].Tile.Value = getValue(gameArray[first][second].Tile.Letter);
        gameArray[first][second].PlacedThisTurn = true;
        gameArray[first][second].HasTile = true;
        gameArray[first][second].Row = first;
        gameArray[first][second].Column = second;

        //Removes tile from your player hand array.
        piece.remove();
        var tile = parseInt(id.substring(10));
        players[0].hand.splice(tile, 1);
        hand = null;
    }
}

//function GetImage(letter) {
//    switch (letter) {
//        case "A":
//            var img = document.createElement('img');
//            img.src ="~/Images/A.png";
//            return img;
//    }
//}

function LoadLetterImage(letter){
    if (letter == "A") {
        document.documentElement.outerHTML = '<img src="~/Images/A.png" />';
    }
}

function getValue(letter){
    switch (letter) {
        case "A":
            return 1;
        case "B":
            return 3;
        case "C":
            return 3;
        case "D":
            return 2;
        case "E":
            return 1;
        case "F":
            return 4;
        case "G":
            return 2;
        case "H":
            return 4;
        case "I":
            return 1;
        case "J":
            return 8;
        case "K":
            return 5;
        case "L":
            return 1;
        case "M":
            return 3;
        case "N":
            return 1;
        case "O":
            return 1;
        case "P":
            return 3;
        case "Q":
            return 10;
        case "R":
            return 1;
        case "S":
            return 1;
        case "T":
            return 1;
        case "U":
            return 1;
        case "V":
            return 4;
        case "W":
            return 4;
        case "X":
            return 8;
        case "Y":
            return 4;
        case "Z":
            return 10;
        default:
            return 0;

    }
}

function getNumberId(letter) {
    if (letter == "a") return 1;
    if (letter == "b") return 2;
    if (letter == "c") return 3;
    if (letter == "d") return 4;
    if (letter == "e") return 5;
    if (letter == "f") return 6;
    if (letter == "g") return 7;
    if (letter == "h") return 8;
    if (letter == "i") return 9;
    if (letter == "j") return 10;
    if (letter == "k") return 11;
    if (letter == "l") return 12;
    if (letter == "m") return 13;
    if (letter == "n") return 14;
    if (letter == "o") return 15;
}

// Gets the placement row and column of each new tile, checks if they are in the same row or column, returns true or false
function checkLegalPlacement() {
    equalRow = true;
    equalColumn = true;
    var row;
    var column;
    var connected;
    var rowCongruency = true;
    var columnCongruency = true;
    placements = [];
    // Adds tiles played this turn to placements array
    // gameArray.forEach(checkFunction());
    for (var i = 1; i < 16; i++) {
        for (var j = 1; j < 16; j++) {
            if (gameArray[i][j].PlacedThisTurn == true) placements.push({ Row: i, Column: j });
        }
    }
    // Checks if all tiles are either in the same row or same column
    if (placements.length == 1) {
        equalColumn = true;
        equalRow = true;
    }
    else {
        for (var i = 0; i < placements.length; i++) {
            if (i == 0) {
                row = placements[i].Row;
                column = placements[i].Column;
            }
            else {
                if (row != placements[i].Row) equalRow = false;
                if (column != placements[i].Column) equalColumn = false;
            }
        }
    }
    // Checks if tiles are connected to a letter on board
    if (equalRow == true || equalColumn == true) connected = checkConnection()

    if (firstPlay == true) connected = true;
    // Checks if tiles have any open spaces which would be bad
    if (equalRow == true || equalColumn == true && connected == true) {
        if (equalRow == true) rowCongruency = checkRowCongruency();
        if (equalColumn == true) columnCongruency = checkColumnCongruency();
    }
    // Checks all results and returns true or false for if placement is legal
    alert("equalRow " + equalRow);
    alert("equalColumn " + equalColumn);
    alert("connected " + connected);
    alert("rowCongruency " + rowCongruency);
    alert("columnCongruency " + columnCongruency);
    if ((equalRow == true || equalColumn == true) && connected == true && rowCongruency == true && columnCongruency == true) return true;
    return false;
}

// Function required for the foreach loop of checkLegalPlacement
//function checkFunction() {
//    alert(item.Row)
//    if (item.PlacedThisTurn == true) {
//        placements.push({ Row: Item.Row, Column: Item.Column });
//    }
//}

function checkConnection() {
    // Checks the 4 tiles surreounding each placed tile for a connection
    // If any one tiles is connected to a tile not placed this turn, returns true
    // If no connections are found, returns false
    for (var i = 0; i < placements.length; i++) {
        if (gameArray[placements[i].Row][placements[i].Column - 1].HasTile && gameArray[placements[i].Row][placements[i].Column - 1].PlacedThisTurn != true) return true;
        if (gameArray[placements[i].Row][placements[i].Column + 1].HasTile && gameArray[placements[i].Row][placements[i].Column + 1].PlacedThisTurn != true) return true;
        if (gameArray[placements[i].Row - 1][placements[i].Column].HasTile && gameArray[placements[i].Row - 1][placements[i].Column].PlacedThisTurn != true) return true;
        if (gameArray[placements[i].Row + 1][placements[i].Column].HasTile && gameArray[placements[i].Row + 1][placements[i].Column].PlacedThisTurn != true) return true;
    }
    return false;
}

function checkRowCongruency() {
    var columnMax = 0;
    var columnMin = 16;
    var currentRow = placements[0].Row;
    for (var i = 0; i < placements.length; i++) {
        if (placements[i].Column < columnMin) columnMin = placements[i].Column;
        if (placements[i].Column > columnMax) columnMax = placements[i].Column;
    }
    for (var i = columnMin; i <= columnMax; i++) {
        //alert("i: " + i + "    currentRow: " + currentRow);
        if (gameArray[currentRow][i].HasTile != true) return false;
    }
    return true;
}

function checkColumnCongruency() {
    var rowMax = 0;
    var rowMin = 16;
    var currentColumn = placements[0].Column;
    for (var i = 0; i < placements.length; i++) {
        if (placements[i].Row < rowMin) rowMin = placements[i].Row;
        if (placements[i].Row > rowMax) rowMax = placements[i].Row;
    }
    for (var i = rowMin; i <= rowMax; i++) {
        if (gameArray[i][currentColumn].HasTile != true) return false;
    }
    return true;
}


//Gets list of words to use with dictionary, as well as
//setting scoreCounter to the score of the combined words.
//DOES NOT remove bonuses. Must be done after.
function getWords() { 
    var direction = "horizontal";
    scoreCounter = 0;

    if (placements.length > 1) {
        if (placements[0].Row == placements[1].Row) direction = "horizontal";
        if (placements[0].Column == placements[1].Column) direction = "vertical";
    }
    if (direction == "horizontal") {
        //Original Word
        words.push(getHorizontalWord(gameArray[placements[0].Row][placements[0].Column], placements[0].Row, placements[0].Column));
        //Offshoot Words
        for (var i = 0; i < placements.length; i++) {
            var wordPlaceholder = getVerticalWord(gameArray[placements[i].Row][placements[i].Column], placements[i].Row, placements[i].Column);
            if (wordPlaceholder != 0) words.push(wordPlaceholder);
        }
        
    }
    if (direction == "vertical") {
        words.push(getVerticalWord(gameArray[placements[0].Row][placements[0].Column], placements[0].Row, placements[0].Column));
        for (var i = 0; i < placements.length; i++) {
            var wordPlaceholder = getHorizontalWord(gameArray[placements[i].Row][placements[i].Column], placements[i].Row, placements[i].Column);
            if (wordPlaceholder != 0) words.push(wordPlaceholder);
        }
        
    }
    return scoreCounter;
}


function getHorizontalWord(originalTile, originalRow, originalColumn) {
    var multiplier = 1;
    var tileScore = 0;

    var tempWordScore = 0;
    var tileRow = originalRow;
    var tileColumn = originalColumn;
    if (gameArray[tileRow][tileColumn - 1].HasTile == false && gameArray[tileRow][tileColumn + 1].HasTile == false) return 0;


    //Get original tile value and bonus
    tileScore = originalTile.Tile.Value;
    if (originalTile.Bonus == "TL") tileScore *= 3;
    if (originalTile.Bonus == "DL") tileScore *= 2;
    if (originalTile.Bonus == "TW") multiplier *= 3;
    if (originalTile.Bonus == "DW") multiplier *= 2;
    tempWordScore += tileScore;
    tileScore = 0;

    var horizontalWord = gameArray[originalRow][originalColumn].Tile.Letter;
    // Get  Tiles to the left
    while (gameArray[tileRow][tileColumn - 1].HasTile == true) {
        horizontalWord = gameArray[tileRow][tileColumn - 1].Tile.Letter + horizontalWord;
        tileColumn--;
        //Take care of score and multiplier
        tileScore = gameArray[tileRow][tileColumn].Tile.Value;
        if (gameArray[tileRow][tileColumn].Bonus == "TL") tileScore *= 3;
        if (gameArray[tileRow][tileColumn].Bonus == "DL") tileScore *= 2;
        if (gameArray[tileRow][tileColumn].Bonus == "TW") multiplier *= 3;
        if (gameArray[tileRow][tileColumn].Bonus == "DW") multiplier *= 2;
        tempWordScore += tileScore;
        tileScore = 0;
    }
    
    // Reset to original position of placed word
    tileColumn = originalColumn;
    // Get tiles to the right;
    while (gameArray[tileRow][tileColumn + 1].HasTile == true) {
        horizontalWord = horizontalWord + gameArray[tileRow][tileColumn + 1].Tile.Letter;
        tileColumn++;
        tileScore = gameArray[tileRow][tileColumn].Tile.Value;
        if (gameArray[tileRow][tileColumn].Bonus == "TL") tileScore *= 3;
        if (gameArray[tileRow][tileColumn].Bonus == "DL") tileScore *= 2;
        if (gameArray[tileRow][tileColumn].Bonus == "TW") multiplier *= 3;
        if (gameArray[tileRow][tileColumn].Bonus == "DW") multiplier *= 2;
        tempWordScore += tileScore;
        tileScore = 0;
    }
    tempWordScore *= multiplier;
    scoreCounter += tempWordScore;
    return horizontalWord;
}

function getVerticalWord(originalTile, originalRow, originalColumn) {
    var multiplier = 1;
    var tileScore = 0;
    var tempWordScore = 0;

    //Get original tile value and bonus
    tileScore = originalTile.Tile.Value;
    if (originalTile.Bonus == "TL") tileScore *= 3;
    if (originalTile.Bonus == "DL") tileScore *= 2;
    if (originalTile.Bonus == "TW") multiplier *= 3;
    if (originalTile.Bonus == "DW") multiplier *= 2;
    tempWordScore += tileScore;
    tileScore = 0;



    var verticalWord = gameArray[originalRow][originalColumn].Tile.Letter;
    var tileRow = originalRow;
    var tileColumn = originalColumn;
    if (gameArray[tileRow - 1][tileColumn].HasTile == false && gameArray[tileRow + 1][tileColumn].HasTile == false) return 0;

    // Get tiles above
    while (gameArray[tileRow - 1][tileColumn].HasTile == true) {
        verticalWord = gameArray[tileRow - 1][tileColumn].Tile.Letter + verticalWord;
        tileRow--;
        //Take care of score and multiplier
        tileScore = gameArray[tileRow][tileColumn].Tile.Value;
        if (gameArray[tileRow][tileColumn].Bonus == "TL") tileScore *= 3;
        if (gameArray[tileRow][tileColumn].Bonus == "DL") tileScore *= 2;
        if (gameArray[tileRow][tileColumn].Bonus == "TW") multiplier *= 3;
        if (gameArray[tileRow][tileColumn].Bonus == "DW") multiplier *= 2;
        tempWordScore += tileScore;
        tileScore = 0;
    }
    // Reset to original position of placed word
    tileRow = originalRow;
    // Get tiles to the right;
    while (gameArray[tileRow + 1][originalColumn].HasTile == true) {
        verticalWord = verticalWord + gameArray[tileRow + 1][tileColumn].Tile.Letter;
        tileRow++;
        tileScore = gameArray[tileRow][tileColumn].Tile.Value;
        if (gameArray[tileRow][tileColumn].Bonus == "TL") tileScore *= 3;
        if (gameArray[tileRow][tileColumn].Bonus == "DL") tileScore *= 2;
        if (gameArray[tileRow][tileColumn].Bonus == "TW") multiplier *= 3;
        if (gameArray[tileRow][tileColumn].Bonus == "DW") multiplier *= 2;
        tempWordScore += tileScore;
        tileScore = 0;
    }
    tempWordScore *= multiplier;
    scoreCounter += tempWordScore;
    return verticalWord;

}

//-------------------------Turn Logic--------------------------------
function EndTurn(id) {
    
    if (checkLegalPlacement() == true) {

        //Single player for testing

        var addedScore = getWords();
        //check for disctionary?
        //placeholder

        players[0].score += addedScore;
        alert("Your current score is: " + players[0].score);

        var tiles = [];
        //At the end of your turn, pushes existing tiles over to make room for the new ones coming.
        for (i = 1; i <= 7; i++) {
            if (document.getElementById("handLetter" + i) != null) {
                tiles.push(document.getElementById("handLetter" + i));
            }
        }
        //Reassigns the handLetterId in the player's hand.
        for (t = 0; t < tiles.length; t++) {
            tiles[t].id = "handLetter" + (t + 1);
        }
        //Refill tray from bag
        while (players[0].hand.length < 7) {
            selectTileFromBag(players[0].hand.length, 0);
        }

        //Backend logic reset
        endTurnLogic();
    }
}

function endTurnLogic() {
    for (var i = 1; i < 16; i++) {
        for (var j = 1; j < 16; j++) {
            gameArray[i][j].PlacedThisTurn = false;
        }
    }
    for (var i = 0; i < placements.length; i++) {
        gameArray[placements[i].Row][placements[i].Column].Bonus = "None";
        gameArray[placements[i].Row][placements[i].Column].BonusUsed = true;
    }
    placements = [];
    //currentPlayerTurn += 1;
    //firstPlay = false;
    //if (playerNum < currentPlayerTurn) currentPlayerTurn = 1;
}

//-----------------Challenge Logic--------------
function ChallengeWord(challengedWord) {
    if (!challengedWord)
        challengedWord = lastWord;

    params = {
        'challengedWord': challengedWord
    };

    $.ajax({
        type: "GET",
        url: '/Home/Challenge',
        data: params
    }).done(function (data) {
        alert(data)
    });
};



//------------------TESTS------------------


function checkLegalPlacementTest() {
    initArray();
    words = [];

    gameArray[7][7].Tile.Letter = "A";
    gameArray[7][7].Tile.Value = 1;
    gameArray[7][7].PlacedThisTurn = true;
    gameArray[7][7].HasTile = true;
    placements[0] = { Row: 7, Column: 7 };
    gameArray[7][9].Tile.Letter = "T";
    gameArray[7][9].Tile.Value = 1;
    gameArray[7][9].PlacedThisTurn = true;
    gameArray[7][9].HasTile = true;
    placements[1] = { Row: 7, Column: 8 };
    gameArray[7][6].Tile.Letter = "C";
    gameArray[7][6].Tile.Value = 3;
    gameArray[7][6].PlacedThisTurn = true;
    gameArray[7][6].HasTile = true;
    placements[2] = { Row: 7, Column: 6 };
    gameArray[6][6].Tile.Letter = "A";
    gameArray[6][6].Tile.Value = 1;
    gameArray[6][6].HasTile = true;
    gameArray[6][6].Bonus = "None";
    gameArray[8][6].Tile.Letter = "E";
    gameArray[8][6].Tile.Value = 1;
    gameArray[8][6].HasTile = true;
    gameArray[8][6].Bonus = "None";

    var result = checkLegalPlacement();
    alert(result);
    
}


/*function getWordsTest() {
    //{ Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false };
    initArray();
    words = [];

    gameArray[7][7].Tile.Letter = "A";
    gameArray[7][7].Tile.Value = 1;
    gameArray[7][7].PlacedThisTurn = true;
    gameArray[7][7].HasTile = true;
    placements[0] = { Row: 7, Column: 7 };
    gameArray[7][8].Tile.Letter = "T";
    gameArray[7][8].Tile.Value = 1;
    gameArray[7][8].PlacedThisTurn = true;
    gameArray[7][8].HasTile = true;
    placements[1] = { Row: 7, Column: 8 };
    gameArray[7][6].Tile.Letter = "C";
    gameArray[7][6].Tile.Value = 3;
    gameArray[7][6].PlacedThisTurn = true;
    gameArray[7][6].HasTile = true;
    placements[2] = { Row: 7, Column: 6 };
    gameArray[6][6].Tile.Letter = "A";
    gameArray[6][6].Tile.Value = 1;
    gameArray[6][6].HasTile = true;
    gameArray[6][6].Bonus = "None";
    gameArray[8][6].Tile.Letter = "E";
    gameArray[8][6].Tile.Value = 1;
    gameArray[8][6].HasTile = true;
    gameArray[8][6].Bonus = "None";


    getWords();
    


}*/