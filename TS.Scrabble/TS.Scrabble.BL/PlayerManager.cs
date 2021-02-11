using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TS.Scrabble.BL.Models;

namespace TS.Scrabble.BL
{
    public static class PlayerManager
    {
        public static int FillHand(Bag bag, Hand hand) // Return 1 if worked, 2 if crashed
        {
            try
            {
                int bagSize = bag.tiles.Count();
                int handSize = hand.tiles.Count();
                while (bagSize > 0 && handSize < 7)
                {
                    var random = new Random();
                    int tileIndex = random.Next(0, bagSize);
                    Tile tile = new Tile();
                    tile.letter = bag.tiles[tileIndex].letter;
                    tile.value = bag.tiles[tileIndex].value;
                    bag.tiles.RemoveAt(tileIndex);
                    hand.tiles.Add(tile);

                }
                if (bagSize == 0) bag.isEmpty = true;
                return 1;
            }
            catch (Exception)
            {
                return 0;
            }
            
        }
    }
}
