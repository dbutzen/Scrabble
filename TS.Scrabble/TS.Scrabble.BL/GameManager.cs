using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TS.Scrabble.BL.Models;

namespace TS.Scrabble.BL
{
    public static class GameManager
    {
        public static void CreateGame(int players)
        {
            if(players > 1 && players < 5)
            {
                Game game = new Game();
                Bag bag = new Bag();
                BagManager.InitializeBag(game);
                game.gameBag = bag;
                
                //Initialize and fill hand of player 1
                Player player1 = new Player();
                player1.hand = new Hand();
                PlayerManager.FillHand(game.gameBag, player1.hand);
                
                // Initialize and fill hand of player 2
                Player player2 = new Player();
                player2.hand = new Hand();
                PlayerManager.FillHand(game.gameBag, player2.hand);
                
                //Player 3 and 4 if needed
                if (players > 2)
                {
                    Player player3 = new Player();
                    player3.hand = new Hand();
                    PlayerManager.FillHand(game.gameBag, player3.hand);
                }
                if(players > 3)
                {
                    Player player4 = new Player();
                    player4.hand = new Hand();
                    PlayerManager.FillHand(game.gameBag, player4.hand);
                }

                //Initialize board
                BoardManager.Initialize(game.board);
            }
            else
            {
                
            }
        }
    }
}
