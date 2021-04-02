$(function () {
    var gameHub = $.connection.gameHub;
    gameHub.client.showClientId = function (id) {
        alert(users);
    };
    gameHub.client.addClientIds = function (ids) {
        users = ids;
        numPlayers = users.length;
        if (numPlayers == 2) {
            gameStart();
            gameHub.server.gameStart();
            gameHub.server.showTiles($.connection.hub.id);
        }
    };

    gameHub.client.addTileToPlayerHand = function () {

    }

    function addTileToPlayerTray = function (tileNum, text) {
        var div = document.createElement("DIV");
        tray = document.getElementById("tray-container");

        div.id = "handLetter" + (tileNum + 1);
        div.className = "letter hand";
        div.style.cursor = "pointer";
        div.onclick = function () { HandClicked(this.id); };
        div.innerHTML = '<img class = "hand letter" src = "../Images/' + text + '.png" />';
        tray.appendChild(div);
    }

    function onlineGameStart() {
        reset();
        initArray();
        newBag();
        onlinePlayerSetup();
        gameHub.server.showTiles($.connection.hub.id);
    }

    function onlinePlayerSetup() {
        var player = { playerNumber: num, score: 0, hand: [] }
        players.push(player);
        while (player.hand.length < 7) {
            gameHub.server.selectTileFromTileBag();
        }
    }


    gameHub.client.displayTiles = function () {
        var i;
        for (i = 0; i < 7; i++) {
            addTileToHand(i, players[0].hand[i].Letter);
        }
    }

    $.connection.hub.start().done(function () {
        gameHub.server.pushClientId($.connection.hub.id);
        $('#clientId').click(function () {
            gameHub.server.getClientId($.connection.hub.id);
        });
    });
    
});