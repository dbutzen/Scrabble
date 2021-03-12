
var id_placeholder;
var tray;

var gameArray = [,];
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
var placements = [,];

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
    for (var i = 0; i < 17; i++) {
        for (var j = 0; j < 17; j++) {
            gameArray[i, j] = { Tile: {}, Bonus: "None", BonusUsed: false, Value: "None", PlacedThisTurn: false, HasTile: false};
        }
        // Triple word denoted TW, same as class in html
        gameArray[1, 1].Bonus = "TW";
        gameArray[1, 8].Bonus = "TW";
        gameArray[1, 15].Bonus = "TW";
        gameArray[8, 1].Bonus = "TW";
        gameArray[8, 15].Bonus = "TW";
        gameArray[15, 1].Bonus = "TW";
        gameArray[15, 8].Bonus = "TW";
        gameArray[15, 15].Bonus = "TW";

        //Double Word
        gameArray[2, 2].Bonus = "DW";
        gameArray[2, 14].Bonus = "DW";
        gameArray[3, 3].Bonus = "DW";
        gameArray[3, 13].Bonus = "DW";
        gameArray[4, 4].Bonus = "DW";
        gameArray[4, 12].Bonus = "DW";
        gameArray[5, 5].Bonus = "DW";
        gameArray[5, 11].Bonus = "DW";
        gameArray[7, 7].Bonus = "DW";
        gameArray[11, 5].Bonus = "DW";
        gameArray[11, 11].Bonus = "DW";
        gameArray[12, 4].Bonus = "DW";
        gameArray[12, 12].Bonus = "DW";
        gameArray[13, 3].Bonus = "DW";
        gameArray[15, 1].Bonus = "DW";
        gameArray[15, 1].Bonus = "DW";
        gameArray[15, 1].Bonus = "DW";

        //Double Letter
        gameArray[1, 4].Bonus = "DL";
        gameArray[1, 12].Bonus = "DL";
        gameArray[3, 6].Bonus = "DL";
        gameArray[3, 8].Bonus = "DL";
        gameArray[4, 1].Bonus = "DL";
        gameArray[4, 7].Bonus = "DL";
        gameArray[4, 15].Bonus = "DL";
        gameArray[7, 3].Bonus = "DL";
        gameArray[7, 7].Bonus = "DL";
        gameArray[7, 9].Bonus = "DL";
        gameArray[7, 13].Bonus = "DL";
        gameArray[8, 4].Bonus = "DL";
        gameArray[8, 12].Bonus = "DL";
        gameArray[9, 3].Bonus = "DL";
        gameArray[9, 7].Bonus = "DL";
        gameArray[9, 9].Bonus = "DL";
        gameArray[9, 13].Bonus = "DL";
        gameArray[12, 1].Bonus = "DL";
        gameArray[12, 8].Bonus = "DL";
        gameArray[12, 15].Bonus = "DL";
        gameArray[13, 7].Bonus = "DL";
        gameArray[13, 9].Bonus = "DL";
        gameArray[15, 4].Bonus = "DL";
        gameArray[15, 12].Bonus = "DL";

        //Triple Letter
        gameArray[2, 6].Bonus = "TW";
        gameArray[2, 10].Bonus = "TW";
        gameArray[6, 2].Bonus = "TW";
        gameArray[6, 6].Bonus = "TW";
        gameArray[6, 10].Bonus = "TW";
        gameArray[6, 14].Bonus = "TW";
        gameArray[8, 2].Bonus = "TW";
        gameArray[8, 6].Bonus = "TW";
        gameArray[8, 10].Bonus = "TW";
        gameArray[8, 14].Bonus = "TW";
        gameArray[14, 6].Bonus = "TW";
        gameArray[14, 10].Bonus = "TW";

    }
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


//Adds physical tile to physical player hand
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
    initArray();
    newBag();
    //player setup must happen after bag is initialized
    playerSetup(numPlayers);
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
    // Get cell of table to manipulate
    document.getElementById(id).innerHTML = hand;
    //Add to array
    var firstLetter = id.charAt(0);
    var first = getNumberId(firstLetter);
    var secondLetter = id.charAt(2);
    var second = getNumberId(secondLetter);
    gameArray[first, second].Tile.Letter = document.getElementById(id).textContent; 
    gameArray[first, second].Tile.Value = getValue(gameArray[first, second].Tile.Letter);
    gameArray[first, second].PlacedThisTurn = true;
    gameArray[first, second].Row = first;
    gameArray[first, second].Column = second;

    //Removes tile from your player hand array.
    piece.remove();
    var tile = parseInt(id.substring(10));
    players[0].hand.splice(tile, 1);
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
    if (letter = "a") return 1;
    if (letter = "b") return 2;
    if (letter = "c") return 3;
    if (letter = "d") return 4;
    if (letter = "e") return 5;
    if (letter = "f") return 6;
    if (letter = "g") return 7;
    if (letter = "h") return 8;
    if (letter = "i") return 9;
    if (letter = "j") return 10;
    if (letter = "k") return 11;
    if (letter = "l") return 12;
    if (letter = "m") return 13;
    if (letter = "n") return 14;
    if (letter = "o") return 15;
}

// Gets the placement row and column of each new tile, checks if they are in the same row or column, returns true or false
function checkLegalPlacement() {
    equalRow = true;
    equalColumn = true;
    var row;
    var column;
    placements = [,];
    gameArray.forEach(checkFunction());
    for (var i = 0; i < placements.length; i++) {
        if (i == 0) {
            row = placements[i].Row;
            column = placements[i].column;
        }
        else {
            if (row != placements[i].Row) equalRow = false;
            if (column != placements[i].Column) equalColumn = false;
        }
    }
    if (equalRow == false && equalColumn == false) {
        return false;
    }
    return true;
}

// Function required for the foreach loop of checkLegalPlacement
function checkFunction() {
    if (item.PlacedThisTurn == true) {
        placements.push({ Row: Item.Row, Column: Item.Column });
    }
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

    //Backend logic reset
    endTurnLogic();
}

function endTurnLogic() {
    gameArray.forEach(resetPlacements());
    placements = [,];
    currentPlayerTurn += 1;
    if (playerNum < currentPlayerTurn) currentPlayerTurn = 1;
}

function resetPlacements() {
    item.PlayedThisTurn = false;
}