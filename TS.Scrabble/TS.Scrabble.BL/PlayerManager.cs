using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TS.Scrabble.BL.Models

namespace TS.Scrabble.BL
{
    public static class PlayerManager
    {
        public static int FillHand(Bag bag, Hand hand)
        {
            int bagSize = bag.tiles.Count();
            int handSize = hand.tiles.Count();
            while (bagSize > 0 && handSize < 7)
            {
                var random = new Random();
                int tileIndex = random.Next(1, bagSize);
                bag.tiles.


            }
        }
    }
}
