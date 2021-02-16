using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TS.Scrabble.BL.Models;
using TS.Scrabble.PL;

namespace TS.Scrabble.BL
{
    public static class GameManager
    {
        /*public static void CreateGame(int players)
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
                //Don't start game
            }
        }*/

        public static int Insert(Game game, bool rollback = false)
        {
            try
            {
                int results = 0;
                using (ScrabbleEntities dc = new ScrabbleEntities())
                {
                    DbContextTransaction transaction = null;
                    if (rollback) transaction = dc.Database.BeginTransaction();

                    tblGame row = new tblGame();

                    row.Id = dc.tblGames.Any() ? dc.tblGames.Max(dt => dt.Id) + 1 : 1;
                    row.DatePlayed = game.DatePlayed;
                    row.GameState = game.GameState;
                    row.Name = game.Name;
                    row.Password = game.Password;

                    game.Id = row.Id;
                    dc.tblGames.Add(row);
                    results = dc.SaveChanges();

                    if (rollback) transaction.Rollback();
                    return results;
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public static int Update(Game game, bool rollback = false)
        {
            try
            {
                int results = 0;
                using (ScrabbleEntities dc = new ScrabbleEntities())
                {
                    DbContextTransaction transaction = null;
                    if (rollback) transaction = dc.Database.BeginTransaction();

                    tblGame row = dc.tblGames.FirstOrDefault(dt => dt.Id == game.Id);

                    if (row != null)
                    {
                        row.GameState = game.GameState;
                        row.Name = game.Name;
                        row.DatePlayed = game.DatePlayed;
                        row.Password = game.Password;

                        results = dc.SaveChanges();

                        if (rollback) transaction.Rollback();
                        return results;
                    }

                    else
                    {
                        throw new Exception("Row was not found.");
                    }
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public static int Delete(Game game, bool rollback = false)
        {
            try
            {
                int results = 0;
                using (ScrabbleEntities dc = new ScrabbleEntities())
                {
                    DbContextTransaction transaction = null;
                    if (rollback) transaction = dc.Database.BeginTransaction();

                    tblGame row = dc.tblGames.FirstOrDefault(dt => dt.Id == game.Id);

                    if (row != null)
                    {
                        dc.tblGames.Remove(row);

                        results = dc.SaveChanges();

                        if (rollback) transaction.Rollback();
                    }
                    else
                    {
                        throw new Exception("Row was not found.");
                    }

                }
                return results;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public static List<Game> Load()
        {
            try
            {
                List<Game> rows = new List<Game>();
                using (ScrabbleEntities dc = new ScrabbleEntities())
                {
                    dc.tblGames.ToList().ForEach(dt => rows.Add(new Game
                    {
                        Id = dt.Id,
                        DatePlayed = dt.DatePlayed,
                        GameState = dt.GameState,
                        Name = dt.Name,
                        Password = dt.Password,
                        Players = UserManager.Load(dt.Id)
                    }));
                    return rows;
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public static Game LoadById(int id)
        {
            try
            {
                using (ScrabbleEntities dc = new ScrabbleEntities())
                {
                    tblGame row = dc.tblGames.FirstOrDefault(dt => dt.Id == id);
                    if (row != null)
                    {
                        Game game = new Game
                        {
                            Id = row.Id,
                            Name = row.Name,
                            DatePlayed = row.DatePlayed,
                            GameState = row.GameState,
                            Password = row.Password,
                            Players = UserManager.Load(row.Id)
                        };
                        return game;

                    }
                    else
                    {
                        throw new Exception("Row was not found.");
                    }
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

    }
}
