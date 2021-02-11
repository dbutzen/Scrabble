using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TS.Scrabble.BL.Models;

namespace TS.Scrabble.BL
{
    public static class BoardManager
    {
        public static void Initialize(Board board)
        {
            board.spaces = new Space[17, 17];
            board.spaces[1, 1].bonus = "3word";
            board.spaces[1, 4].bonus = "2letter";
            board.spaces[1, 8].bonus = "3word";
            board.spaces[1, 12].bonus = "2letter";
            board.spaces[1, 15].bonus = "3word";
            board.spaces[2, 2].bonus = "2word";
            board.spaces[2, 6].bonus = "3letter";
            board.spaces[2, 10].bonus = "3letter";
            board.spaces[2, 14].bonus = "2word";
            board.spaces[3, 3].bonus = "2word";
            board.spaces[3, 7].bonus = "2letter";
            board.spaces[3, 9].bonus = "2letter";
            board.spaces[3, 13].bonus = "2word";
            board.spaces[4, 1].bonus = "2letter";
            board.spaces[4, 4].bonus = "2word";
            board.spaces[4, 8].bonus = "2letter";
            board.spaces[4, 12].bonus = "2word";
            board.spaces[4, 15].bonus = "2letter";

            for (int i = 0; i < 17; i++)
            {
                for (int j = 0; j < 17; j++)
                {
                    board.spaces[i, j].hasTile = false;
                }
            }
           
        }
    }
}
