using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TS.Scrabble.BL.Models
{
    public class Game
    {
        public List<Player> players { get; set; }
        public Board board { get; set; }
        public Bag gameBag { get; set; }
    }
}
