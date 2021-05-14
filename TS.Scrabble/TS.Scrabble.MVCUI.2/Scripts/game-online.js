﻿$(function () {
    var gameHub = $.connection.gameHub;
    gameHub.client.showClientId = function (id) {
        alert(users);
    };
    gameHub.client.addClientIds = function (ids) {
        //upon connection, updates the users
        users = ids;
        numPlayers = users.length;
        if (numPlayers == 4) {
            //when the number of connections is equal to the number above, the game begins.
            gameHub.server.gameStart($.connection.hub.id);
            //updates the turn variables to start the game
            currentPlayerTurn = 1;
            turnCounter = 1;
            //initializes client side variables
            onlineGameStart();
        }
    };

    gameHub.client.addTileToPlayerHand = function (letter, value, num) {
        var tile = { Letter: letter, Value: value }
        players[num - 1].hand.push(tile);
    }

    gameHub.client.showTiles = function () {
        var tile = { Letter: letter, Value: value }
        players[num - 1].hand.push(tile);
    }

    gameHub.client.PlayerTurn = function () {
        //gives the ability to end a turn to the current player
        isTurn = true;
        $("#btnEndTurn").click(function () {
            turnEnded();
        });
        $('#btnUndo').click(function () {
            undo();
        });
    }

    //sets the turn labels for every layer
    gameHub.client.setTurnLabel = function (username, id) {
        //rotates the player turn back to one if it exceeds the amount of players in the game
        if (currentPlayerTurn > numPlayers) {
            currentPlayerTurn = 1;
        }
        if (id == $.connection.hub.id) {
            document.getElementById("currentturn").innerHTML = "It is your turn.";
        } else {
            document.getElementById("currentturn").innerHTML = "It is " + username + "'s turn.";
        }
        
    }

    gameHub.client.updatePlayerTurn = function () {
        currentPlayerTurn++;
        if (currentPlayerTurn > numPlayers) {
            currentPlayerTurn = 1;
        }
        turnCounter++;
    }

    //empties the tiles from the players tray then refills it with all tiles in the players hand
    gameHub.client.reshowTiles = function () {
        $("#tray-container").html('');
        gameHub.server.showTiles($.connection.hub.id);
    }

    gameHub.client.undoTileFromBoard = function (id) {
        var firstLetter = id.charAt(0);
        var first = getNumberId(firstLetter);
        var secondLetter = id.charAt(1);
        var second = getNumberId(secondLetter);
        if (gameArray[first][second].Bonus == "TW") {
            document.getElementById(id).innerHTML = '<td id="' + id + '" class="board-tile unused tw" onclick="BoardClicked(id)" style="cursor:pointer">TW</td>';
        }
        else if (gameArray[first][second].Bonus == "DW") {
            document.getElementById(id).innerHTML = '<td id="' + id + '" class="board-tile unused dw" onclick="BoardClicked(id)" style="cursor:pointer">DW</td>';
        }
        else if (gameArray[first][second].Bonus == "TL") {
            document.getElementById(id).innerHTML = '<td id="' + id + '" class="board-tile unused tl" onclick="BoardClicked(id)" style="cursor:pointer">TL</td>';
        }
        else if (gameArray[first][second].Bonus == "DL") {
            document.getElementById(id).innerHTML = '<td id="' + id + '" class="board-tile unused dl" onclick="BoardClicked(id)" style="cursor:pointer">DL</td>';
        }
        else {
            document.getElementById(id).innerHTML = '<td id="' + id + '" class="board-tile unused" onclick="BoardClicked(id)" style="cursor:pointer"></td>';
        }
        // remove tile from code
        gameArray[first][second].HasTile = false;
        gameArray[first][second].PlacedThisTurn = false;
        gameArray[first][second].Tile.Letter = null;
        gameArray[first][second].Tile.Value = null;
        gameArray[first][second].Row = null;
        gameArray[first][second].Column = null;
    }

    gameHub.client.createScoreboard = function (userName) {
        var tables = document.getElementById('score-board');
        var rows = tables.insertRow(1);
        var cellOne = rows.insertCell(0);
        var cellTwo = rows.insertCell(1);

        cellOne.innerHTML = userName;
        cellTwo.innerHTML = "0";
        cellTwo.id = userName;
    }

    gameHub.client.updateScoreboard = function (userName, score) {
        var cell = document.getElementById(userName)

        cell.innerHTML = score;
    }

    function onlineGameStart() {
        reset();
        initArray();
        //newBag();
        //onlinePlayerSetup(numPlayers);
        //gameHub.server.showTiles($.connection.hub.id);
    }

    function onlinePlayerSetup(playerCount) {
        var i;
        for (i = 0; i < playerCount; i++) {
            initializePlayer(i + 1);
        }
    }
    function initializePlayer(num) {
        var player = { playerNumber: num, score: 0, hand: [] }
        players.push(player);
        //while (player.hand.length < 7) {
        //    gameHub.server.addTile(num);
        //}
    }

    function turnEnded() {
        
        //if (checkLegalPlacement() == true) {
            //removes the ability to end a turn when the player ends their turn
            isTurn = false;
            $("#btnEndTurn").unbind();
            $("#btnUndo").unbind();
            var score = getWords();
            gameHub.server.addScore(currentPlayerTurn, score);
            gameHub.server.updateCurrentPlayerTurn();
            //refills the players hand after ending the turn
            gameHub.server.fillPlayerTiles($.connection.hub.id);
            //sets up the next player
            var nextTurn = currentPlayerTurn + 1;
            if (nextTurn > numPlayers) { nextTurn = 1 }
            gameHub.server.endTurn(nextTurn);
        //}

    }

    function undo() {
        gameHub.server.undoTile(currentPlayerTurn);
    }

    function HandClicked(id) {
        hand = document.getElementById(id).innerHTML;
        piece = document.getElementById(id);
        gameHub.server.setCurrentTile(hand);
    }

    function BoardClicked(id) {

        //Add to array
        
        if (gameArray[first][second].HasTile == false) {
            // Get cell of table to manipulate
            // Array logic
            //Removes tile from your player hand array.
            piece.remove();
            var tile = parseInt(id.substring(10));
            //players[0].hand.splice(tile, 1);
            gameHub.server.tileToBoard(id, hand.innerHTML, $.connection.hub.id);
        }
    }



    gameHub.client.selectedTile = function (tile) {
        hand = tile;
    }

    gameHub.client.addTileToBoard = function (id) {
        var firstLetter = id.charAt(0);
        var first = getNumberId(firstLetter);
        var secondLetter = id.charAt(1);
        var second = getNumberId(secondLetter);

        document.getElementById(id).innerHTML = hand;

        gameArray[first][second].Tile.Letter = document.getElementById(id).textContent;
        gameArray[first][second].Tile.Value = getValue(gameArray[first][second].Tile.Letter);
        gameArray[first][second].PlacedThisTurn = true;
        gameArray[first][second].HasTile = true;
        gameArray[first][second].Row = first;
        gameArray[first][second].Column = second;

        hand = null;
    }

    gameHub.client.displayTile = function (tileNum, letter, id) {
        //var i;
        //for (i = 0; i < 7; i++) {
        //    addTileToHand(i, players[0].hand[i].Letter);
        //}
        //displays the tiles in the players hand.
        if ($.connection.hub.id == id) {
            addTileToHand(tileNum, letter)
        }
    }

    $.connection.hub.start().done(function () {
        //pushes the players connection id into the game hub
        gameHub.server.pushClientId($.connection.hub.id);
        //adds the user to the player list
        gameHub.server.addPlayer($.connection.hub.id, document.getElementById("username").value);
        //adds functionality to the client button for potential testing
        $('#clientId').click(function () {
            gameHub.server.getClientId($.connection.hub.id);
        });
        //initilizes turn variables
        currentPlayerTurn = 0;
        turnCounter = 0;
    });
    
});