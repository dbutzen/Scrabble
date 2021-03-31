using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TS.Scrabble.MVCUI._2.Hubs;

namespace TS.Scrabble.MVCUI._2.Models
{
    public class User
    {
        private readonly static Lazy<User> _instance = new Lazy<User>(() => new User(GlobalHost.ConnectionManager.GetHubContext<GameHub>().Clients));
        private readonly List<string> _clientIds = new List<string>();
        public static User Instance
        {
            get
            {
                return _instance.Value;
            }
        }

        private User(IHubConnectionContext<dynamic> clients)
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

        public List<string> GetClientIds()
        {
            return _clientIds;
        }
    }
}