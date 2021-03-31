$(function () {
    var gameHub = $.connection.gameHub;
    gameHub.client.showClientId = function (id) {
        alert(users);
    };
    gameHub.client.addClientIds = function (ids) {
        users = ids;
    };

    $.connection.hub.start().done(function () {
        numPlayers += 1;
        gameHub.server.pushClientId($.connection.hub.id);
        $('#clientId').click(function () {
            gameHub.server.getClientId($.connection.hub.id);
        });
    });
    
});