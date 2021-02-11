using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TS.Scrabble.BL.Models
{
    public class Bag
    {
        public List<Tile> tiles { get; set; }
        public bool isEmpty { get; set; }
    }
}
