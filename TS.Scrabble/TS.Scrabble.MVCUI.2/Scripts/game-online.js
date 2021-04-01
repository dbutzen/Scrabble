$(function () {
    var gameHub = $.connection.gameHub;
    gameHub.client.showClientId = function (id) {
        alert(users);
    };
    gameHub.client.addClientIds = function (ids) {
        users = ids;
        numPlayers = users.length;
        if (numPlayers == 3) {
            gameStart();
            gameHub.server.showTiles($.connection.hub.id);
        }
    };

    function onlineGameStart() {
        reset();
        initArray();
        newBag();
        gameHub.server.showTiles($.connection.hub.id);
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