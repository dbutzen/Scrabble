using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using TS.Scrabble.MVCUI._2.Models;

namespace TS.Scrabble.MVCUI._2.Hubs
{
    public class GameHub : Hub
    {
        private readonly Game _game;
        private readonly static ConnectionMapping<string> _connections = new ConnectionMapping<string>();
        public GameHub() : this(Game.Instance) { }
        public GameHub(Game game)
        {
            _game = game;
        }

        public void GetClientId(string id)
        {
            //Gets the clients unique connection id
            string clientId = Context.ConnectionId;
            //Used for debugging to see if the connection id is set
            _game.GetPlayers();
            //Clients.Caller.showClientId(id);
        }

        public override Task OnConnected()
        {
            string name = Context.User.Identity.Name;
            _connections.Add(name, Context.ConnectionId);

            
            Groups.Add(Context.ConnectionId, "game");

            return base.OnConnected();
        }

        public void PushClientId(string id)
        {
            //Adds the client connection id to the clientid list
            _game.PushClientId(Context.ConnectionId);
            Clients.All.addClientIds(_game.GetClientIds());
        }

        public void AddPlayer(string connectionId, string username)
        {
            //Creates a new player and adds it to list of players
            Player player = new Player();
            player.ConnectionId = connectionId;
            player.Username = username;
            player.PlayerNum = _game.GetPlayers().Count + 1;
            player.Hand = new List<Tile>();
            _game.AddPlayer(player);
        }
        public Task<int> InitializePlayers()
        {
            //Initializes the players hands for the game to start
            return _game.InitializePlayers(_game.GetPlayers());
        }
        public void GameStart(string id)
        {
            if(id == _game.GetClientIds().FirstOrDefault())
            {
                //Creates a fresh tile bag
                _game.NewTileBag();
                //Initializes players
                Task task = Task.Run(async () => { await InitializePlayers(); });
                task.Wait();
                //Displays the fresh tiles in the players hands
                ShowTiles(id);
            }
        }
        public async void AddTile(int playerNum)
        {
            List<Player> players = _game.GetPlayers();
            Player currentPlayer = players[playerNum];
            await _game.AddNewTile(currentPlayer);
            Task task = Task.Run(async () => { await Clients.Client(currentPlayer.ConnectionId).displayTile(currentPlayer.Hand.Count, currentPlayer.Hand[currentPlayer.Hand.Count - 1].Letter, currentPlayer.ConnectionId); });
            task.Wait();
        }

        public void ShowTiles(string id)
        {
            //Gets all the players
            List<Player> players = _game.GetPlayers();

            //Adds the players tiles to their own hands
            foreach(Player p in players)
            {
                int count = 1;
                foreach (Tile t in p.Hand)
                {
                    Task task = Task.Run(async () => { await Clients.Client(p.ConnectionId).displayTile(count, t.Letter, p.ConnectionId); });
                    task.Wait();
                    count++;
                }
                
            }
        }

        public void TileToBoard(string id, string letter)
        {
            //For testing, tries to remove the letter from the first players hand
            List<Tile> playerTiles = _game.GetPlayers().FirstOrDefault().Hand;
            playerTiles.Remove(playerTiles.Where(l => l.Letter == letter).FirstOrDefault());
            Clients.Group("game").addTileToBoard(id);
        }

        public void SetCurrentTile(string tile)
        {
            //sets the hand variable to each client for board placement
            Clients.Group("game").selectedTile(tile);
        }
    }

    public class ConnectionMapping<T>
    {
        private readonly Dictionary<T, HashSet<string>> _connections =
            new Dictionary<T, HashSet<string>>();

        public int Count
        {
            get
            {
                return _connections.Count;
            }
        }

        public void Add(T key, string connectionId)
        {
            lock (_connections)
            {
                HashSet<string> connections;
                if (!_connections.TryGetValue(key, out connections))
                {
                    connections = new HashSet<string>();
                    _connections.Add(key, connections);
                }

                lock (connections)
                {
                    connections.Add(connectionId);
                }
            }
        }

        public IEnumerable<string> GetConnections(T key)
        {
            HashSet<string> connections;
            if (_connections.TryGetValue(key, out connections))
            {
                return connections;
            }

            return Enumerable.Empty<string>();
        }

        public void Remove(T key, string connectionId)
        {
            lock (_connections)
            {
                HashSet<string> connections;
                if (!_connections.TryGetValue(key, out connections))
                {
                    return;
                }

                lock (connections)
                {
                    connections.Remove(connectionId);

                    if (connections.Count == 0)
                    {
                        _connections.Remove(key);
                    }
                }
            }
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