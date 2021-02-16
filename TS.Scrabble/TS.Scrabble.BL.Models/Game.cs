using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TS.Scrabble.BL.Models
{
    public class Game
    {
        /*public List<Player> players { get; set; }
        public Board board { get; set; }
        public Bag gameBag { get; set; }*/

        public int Id { get; set; }
        public DateTime DatePlayed { get; set; }
        public string GameState { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public List<User> Players { get; set; }
    }
}
