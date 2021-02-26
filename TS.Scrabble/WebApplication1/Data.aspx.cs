using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using TS.Scrabble.BL;
using TS.Scrabble.BL.Models;

namespace WebApplication1
{
    public partial class Data : System.Web.UI.Page
    {
        Game game;
        protected void Page_Load(object sender, EventArgs e)
        {
            game = GameManager.LoadById(1);
        }

        protected void btnLoad_Click(object sender, EventArgs e)
        {
            lblGameName.Text = game.Name;
            lblGamepass.Text = game.Password;
        }
    }
}