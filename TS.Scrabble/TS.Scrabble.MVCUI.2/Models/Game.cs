﻿using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using TS.Scrabble.MVCUI._2.Hubs;

namespace TS.Scrabble.MVCUI._2.Models
{
    public class Game
    {
        private readonly static Lazy<Game> _instance = new Lazy<Game>(() => new Game(GlobalHost.ConnectionManager.GetHubContext<GameHub>().Clients));
        private readonly List<string> _clientIds = new List<string>();
        private readonly List<Tile> tileBag = new List<Tile>();
        private readonly List<Player> players = new List<Player>();
        private readonly List<Tile> currentTurnTiles = new List<Tile>();
        private readonly List<string> currentTurnTileLocations = new List<String>();

        public static Game Instance
        {
            get
            {
                return _instance.Value;
            }
        }

        private Game(IHubConnectionContext<dynamic> clients)
        {
            Clients = clients;
        }

        private IHubConnectionContext<dynamic> Clients
        {
            get; set;
        }

        public void PushClientId(string id)
        {
            _clientIds.Add(id);
        }

        public void RemoveClientId(string id)
        {
            //When a player disconnects, remove their id from the connection id list
            string clientId = _clientIds.Where(c => c == id).FirstOrDefault();
            _clientIds.Remove(clientId);
            //Until connection mapping and multiple games can be played at once, player with the id is also removed
            Player player = players.Where(p => p.ConnectionId == id).FirstOrDefault();
            players.Remove(player);
            //Reassigns player numbers so there isn't multiple players of the same player number
            ReassignPlayerNums();
        }

        public void ReassignPlayerNums()
        {
            int count = 1;
            foreach(Player p in players)
            {
                p.PlayerNum = count;
                count++;
            }
        }

        public void AddPlayer(Player player)
        {
            players.Add(player);
        }

        public async Task<int> FillPlayerTiles(Player player)
        {
            //initializes random class
            Random rand = new Random();
            while(player.Hand.Count < 7)
            {
                //decides a random tile from the total amount of tiles in the bag
                int value = rand.Next(0, tileBag.Count - 1);
                Task t = Task.Run(async () =>
                {
                    await SelectTileFromBag(player, value);
                });
                t.Wait();
            }
            return 0;
        }

        public async Task<int> InitializePlayers(List<Player> playerList)
        {
            Random rand = new Random();
            //Fills each players tile bags.
            foreach (Player p in playerList)
            {
                while (p.Hand.Count < 7)
                {
                    //Gets a random number to select from the tile bag 
                    int value = rand.Next(0, tileBag.Count - 1);
                    Task t = Task.Run(async () =>
                    {
                       await SelectTileFromBag(p, value);
                    });
                    t.Wait();
                }
            }
            return playerList.Count;
        }

        public List<string> GetClientIds()
        {
            return _clientIds;
        }
        //returns all players
        public List<Player> GetPlayers()
        {
            
            return players;
        }
        //returns a player by their connection id
        public Player GetPlayer(string id)
        {
            List<Player> players = GetPlayers();
            return players.Where(p => p.ConnectionId == id).FirstOrDefault();
        }
        //returns a player by their player number
        public Player GetPlayer(int playerNum)
        {
            List<Player> players = GetPlayers();
            return players.Where(p => p.PlayerNum == playerNum).FirstOrDefault();
        }
        
        //When a player puts a tile down, it is added to a list of the tiles played that turn
        public void AddTileToCurrentTiles(Tile tile, string location)
        {
            currentTurnTiles.Add(tile);
            currentTurnTileLocations.Add(location);
        }
        //If the undo button is pressed, the most recent tile they placed is returned to them
        public async Task<int> TakeTileFromCurrentTiles(Player player)
        {
            if (currentTurnTiles.Count() != 0)
            {
                Tile latestTile = currentTurnTiles[currentTurnTiles.Count() - 1];
                player.Hand.Add(latestTile);
                currentTurnTiles.Remove(latestTile);
            }
            return 0;
        }

        public async Task<string> GetLastTileLocation()
        {
            if(currentTurnTileLocations.Count != 0)
            {
                string lastLocation = currentTurnTileLocations[currentTurnTileLocations.Count() - 1];
                currentTurnTileLocations.Remove(lastLocation);
                return lastLocation;
            } else
            {
                return null;
            }
            
        }
        //At the end of a turn, the current tile list is emptied (can't set to a new list due to being readonly)
        public async Task<int> ResetCurrentTiles()
        {
            if(currentTurnTiles.Count > 0)
            {
                foreach (Tile t in currentTurnTiles)
                {
                    currentTurnTiles.Remove(t);
                }
            }
            return currentTurnTiles.Count();
        }

        public async Task<Tile> SelectTileFromBag(Player player, int num)
        {
            if (tileBag.Count > 0)
            {
                //gets the tile from the random value put in
                Tile tile =  tileBag[num];
                //Removes the selected tile from the bag and adds it to the current players hand
                tileBag.Remove(tile);
                player.Hand.Add(tile);
                return tile;
            } else
            {
                return null;
            }
        }
        //initializes tile bag
        public void NewTileBag()
        {
            var newBagTilesCount = 0;
            for (var i = newBagTilesCount; i < 9; i++)
            {
                tileBag.Add( new Tile{ Letter = "A", Value = 1});
            }
            newBagTilesCount += 9;
            for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "B", Value= 3 });
            }
            newBagTilesCount += 2;
            for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
            {
                tileBag.Add(new Tile { Letter= "C", Value= 3 });
            }
            newBagTilesCount += 2;
            for (var i = newBagTilesCount; i < 4 + newBagTilesCount; i++)
            {
                tileBag.Add(new Tile { Letter= "D", Value= 2 });
            }
            newBagTilesCount += 4;
            for (var i = newBagTilesCount; i < 12 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "E", Value= 1 });
            }
            newBagTilesCount += 12;
            for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "F", Value= 4 });
            }
            newBagTilesCount += 2;
            for (var i = newBagTilesCount; i < 3 + newBagTilesCount; i++)
            {
                tileBag.Add(new Tile { Letter = "G", Value = 2 });
            }
            newBagTilesCount += 3;
            for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "H", Value= 4 });
            }
            newBagTilesCount += 2;
            for (var i = newBagTilesCount; i < 9 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "I", Value= 1 });
            }
            newBagTilesCount += 9;
            for (var i = newBagTilesCount; i < 1 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "J", Value= 8 });
            }
            newBagTilesCount += 1;
            for (var i = newBagTilesCount; i < 1 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "K", Value= 5 });
            }
            newBagTilesCount += 1;
            for (var i = newBagTilesCount; i < 4 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "L", Value= 1 });
            }
            newBagTilesCount += 4;
            for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "M", Value= 3 });
            }
            newBagTilesCount += 2;
            for (var i = newBagTilesCount; i < 6 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "N", Value= 1 });
            }
            newBagTilesCount += 6;
            for (var i = newBagTilesCount; i < 8 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "O", Value= 1 });
            }
            newBagTilesCount += 8;
            for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "P", Value= 3 });
            }
            newBagTilesCount += 2;
            for (var i = newBagTilesCount; i < 1 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "Q", Value= 10 });
            }
            newBagTilesCount += 1;
            for (var i = newBagTilesCount; i < 6 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "R", Value= 1 });
            }
            newBagTilesCount += 6;
            for (var i = newBagTilesCount; i < 4 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "S", Value= 1 });
            }
            newBagTilesCount += 4;
            for (var i = newBagTilesCount; i < 6 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "T", Value= 1 });
            }
            newBagTilesCount += 6;
            for (var i = newBagTilesCount; i < 4 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "U", Value= 1 });
            }
            newBagTilesCount += 4;
            for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "V", Value= 4 });
            }
            newBagTilesCount += 2;
            for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "W", Value= 4 });
            }
            newBagTilesCount += 2;
            for (var i = newBagTilesCount; i < 1 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "X", Value= 8 });
            }
            newBagTilesCount += 1;
            for (var i = newBagTilesCount; i < 2 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "Y", Value= 4 });
            }
            newBagTilesCount += 2;
            for (var i = newBagTilesCount; i < 1 + newBagTilesCount; i++)
            {
                tileBag.Add( new Tile { Letter= "Z", Value= 10 });
            }
            newBagTilesCount += 1;
            for (var i = 0; i < 2; i++)
            {
                tileBag.Add( new Tile { Letter= "Blank", Value= 0 });
            }
        }
    }

    public class Tile
    {
        public string Letter { get; set; }
        public int Value { get; set; }
    }

    public class Player
    {
        public int PlayerNum { get; set; }
        public string Username { get; set; }
        public string ConnectionId { get; set; }
        public List<Tile> Hand { get; set; }
        public int Score { get; set; }
    }
}