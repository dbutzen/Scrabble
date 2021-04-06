using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using TS.Scrabble.MVCUI._2.Models;

namespace TS.Scrabble.MVCUI._2.Hubs
{
    public class GameHub : Hub
    {
        private readonly User _user;
        public GameHub() : this(User.Instance) { }
        public GameHub(User user)
        {
            _user = user;
        }

        public void GetClientId(string id)
        {
            string clientId = Context.ConnectionId;
            Clients.Caller.showClientId(id);
        }

        public void PushClientId(string id)
        {
            _user.PushClientId(id);
            Clients.All.addClientIds(_user.GetClientIds());
        }
        public void GameStart()
        {
            _user.NewTileBag();
        }
        public void AddTile(int playerNum)
        {
            Tile tile = new Tile();
            tile = _user.SelectTileFromBag();
            Clients.All.addTileToPlayerHand(tile.Letter, tile.Value, playerNum);
        }

        public void ShowTiles(string id)
        {
            Clients.Client(id).displayTiles();
        }
    }
    //public class Broadcaster
    //{
    //    private readonly static Lazy<Broadcaster> _instance =
    //        new Lazy<Broadcaster>(() => new Broadcaster());
    //    // We're going to broadcast to all clients a maximum of 25 times per second
    //    private readonly TimeSpan BroadcastInterval =
    //        TimeSpan.FromMilliseconds(40);
    //    private readonly IHubContext _hubContext;
    //    private Timer _broadcastLoop;
    //    private ShapeModel _model;
    //    private bool _modelUpdated;
    //    public Broadcaster()
    //    {
    //        // Save our hub context so we can easily use it 
    //        // to send to its connected clients
    //        _hubContext = GlobalHost.ConnectionManager.GetHubContext<GameHub>();
    //        _model = new ShapeModel();
    //        _modelUpdated = false;
    //        // Start the broadcast loop
    //        _broadcastLoop = new Timer(
    //            BroadcastShape,
    //            null,
    //            BroadcastInterval,
    //            BroadcastInterval);
    //    }
    //    public void BroadcastShape(object state)
    //    {
    //        // No need to send anything if our model hasn't changed
    //        if (_modelUpdated)
    //        {
    //            // This is how we can access the Clients property 
    //            // in a static hub method or outside of the hub entirely
    //            _hubContext.Clients.AllExcept(_model.LastUpdatedBy).updateShape(_model);
    //            _modelUpdated = false;
    //        }
    //    }
    //    public void UpdateShape(ShapeModel clientModel)
    //    {
    //        _model = clientModel;
    //        _modelUpdated = true;
    //    }
    //    public static Broadcaster Instance
    //    {
    //        get
    //        {
    //            return _instance.Value;
    //        }
    //    }
    //}

    //public class GameHub : Hub
    //{
    //    // Is set via the constructor on each creation
    //    private Broadcaster _broadcaster;
    //    public GameHub()
    //        : this(Broadcaster.Instance)
    //    {
    //    }
    //    public GameHub(Broadcaster broadcaster)
    //    {
    //        _broadcaster = broadcaster;
    //    }
    //    public void UpdateModel(ShapeModel clientModel)
    //    {
    //        clientModel.LastUpdatedBy = Context.ConnectionId;
    //        // Update the shape model within our broadcaster
    //        _broadcaster.UpdateShape(clientModel);
    //    }
    //    public void Send(string name, string message)
    //    {
    //        // Call the addNewMessageToPage method to update clients.
    //        Clients.All.addNewMessageToPage(name, message);
    //    }
    //}
    //public class ShapeModel
    //{
    //    // We declare Left and Top as lowercase with 
    //    // JsonProperty to sync the client and server models
    //    [JsonProperty("left")]
    //    public double Left { get; set; }
    //    [JsonProperty("top")]
    //    public double Top { get; set; }
    //    // We don't want the client to get the "LastUpdatedBy" property
    //    [JsonIgnore]
    //    public string LastUpdatedBy { get; set; }
    //}
    //public class GameHub : Hub
    //{
    //    public void Send(string name, string message)
    //    {
    //        // Call the addNewMessageToPage method to update clients.
    //        Clients.All.addNewMessageToPage(name, message);
    //    }

    //    public void UpdateModel(ShapeModel clientModel)
    //    {
    //        clientModel.LastUpdatedBy = Context.ConnectionId;
    //        // Update the shape model within our broadcaster
    //        Clients.AllExcept(clientModel.LastUpdatedBy).updateShape(clientModel);
    //    }

    //    public class ShapeModel
    //    {
    //        // We declare Left and Top as lowercase with 
    //        // JsonProperty to sync the client and server models
    //        [JsonProperty("left")]
    //        public double Left { get; set; }
    //        [JsonProperty("top")]
    //        public double Top { get; set; }
    //        // We don't want the client to get the "LastUpdatedBy" property
    //        [JsonIgnore]
    //        public string LastUpdatedBy { get; set; }
    //    }
    //}
}