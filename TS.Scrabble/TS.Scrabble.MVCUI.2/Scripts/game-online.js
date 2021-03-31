$(function () {
    var gameHub = $.connection.gameHub;

    gameHub.client.showClientId = function (id) {
        alert(id);
    }

    $.connection.hub.start().done(function () {
        numPlayers += 1;
        $('#clientId').click(function () {
            gameHub.server.getClientId($.connection.hub.id)
        });
    });
    
});