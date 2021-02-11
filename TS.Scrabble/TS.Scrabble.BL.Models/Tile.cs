using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TS.Scrabble.BL.Models
{
    public class Tile
    {
        public char letter { get; set; }
        public int value { get; set; }
        public int x_pos { get; set; }// Values set to -1 for tiles in hand, -2 for tiles in bag
        public int y_pos { get; set; }
    }
}
