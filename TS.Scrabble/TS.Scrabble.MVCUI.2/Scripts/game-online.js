$(function () {
    var gameHub = $.connection.gameHub;
    gameHub.client.showClientId = function (id) {
        alert(users);
    };
    gameHub.client.addClientIds = function (ids) {
        users = ids;
        numPlayers = users.length;
        if (numPlayers == 2) {
            gameHub.server.gameStart($.connection.hub.id);
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


    gameHub.client.displayTile = function (tileNum, letter, id) {
        //var i;
        //for (i = 0; i < 7; i++) {
        //    addTileToHand(i, players[0].hand[i].Letter);
        //}
        if ($.connection.hub.id == id) {
            addTileToHand(tileNum, letter)
        }
    }

    $.connection.hub.start().done(function () {
        gameHub.server.pushClientId($.connection.hub.id);
        gameHub.server.addPlayer($.connection.hub.id);
        $('#clientId').click(function () {
            gameHub.server.getClientId($.connection.hub.id);
        });
    });
    
});