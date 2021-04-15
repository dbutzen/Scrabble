using Microsoft.Owin;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
[assembly: OwinStartup(typeof(TS.Scrabble.MVCUI._2.Startup))]
namespace TS.Scrabble.MVCUI._2
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // Any connection or hub wire up and configuration should go here
            
            app.MapSignalR();
        }
    }
}