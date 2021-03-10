
var id_placeholder;
var tray;

var tileBag = [];
var equalColumn = true;
var equalRow = true;
var players = [];
var firstPlay = true;
var turnCounter = 1;
var numPlayers = 1;
var selectedTile;

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
function newBag() {
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
}
function selectTileFromBag(playerHandLength, playerNum) {
    var total = 0;
    var i;

    //loop to calculate total tiles remaining
    for (i = 0; i < tileBag.length; i++) {
        total += tileBag[i].count;
    }
    //selects a value from 0 to (total tiles - 1)
    var selectedValue = Math.floor(Math.random() * total);
    var tileCount = 0;
    //loop to use selectedvalue to grab the correct tile
    for (i = 0; i < 27; i++) {
        // if this is selected value
        if (selectedValue < (tileCount + tileBag[i].count)) {
            tileBag[i].Count--;
            players[playerNum].hand.push(tileBag[i]);
            addTileToHand(playerHandLength, tileBag[i].letter);
            return tileBag[i].letter;
        }
        // else
        tileCount += tileBag[i].count;
    }
    //if loop failed to pick a tile, the bag is empty
    return "empty";
}
function addTileToHand(tileNum, text) {
    var div = document.createElement("DIV");
    tray = document.getElementById("tray-container");

    div.id = "handLetter" + (tileNum + 1);
    div.className = "letter hand";
    div.style.cursor = "pointer";
    div.onclick = function () { HandClicked(this.id); };
    div.innerHTML = text;
    tray.appendChild(div);

}

//-------------Game Initialization---------------------
function gameStart() {
    reset();
    newBag();
    //player setup must happen after bag is initialized
    playerSetup(numPlayers);
}
function reset() {
    tileBag = [];
    equalColumn = true;
    equalRow = true;
    players = [];
    firstPlay = true;
    turnCounter = 1;
}
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
    // Get cell of table to manipulate
    document.getElementById(id).innerHTML = hand;
    //Removes tile from your player hand array.
    piece.remove();
    var tile = parseInt(id.substring(10));
    players[0].hand.splice(tile, 1);
}

//-------------------------Turn Logic--------------------------------
function EndTurn(id) {
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
}