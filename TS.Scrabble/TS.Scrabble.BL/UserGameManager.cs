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
    public static class UserGameManager
    {
        public static int Remove(int userid, int gameid, bool rollback = false)
        {
            try
            {
                using (ScrabbleEntities dc = new ScrabbleEntities())
                {
                    DbContextTransaction transaction = null;
                    if (rollback) transaction = dc.Database.BeginTransaction();

                    tblUserGame ug = dc.tblUserGames.FirstOrDefault(u => u.UserId == userid && u.GameId == gameid);
                    if (ug != null)
                    {
                        dc.tblUserGames.Remove(ug);
                        int results = dc.SaveChanges();

                        if (rollback) transaction.Rollback();

                        return results;
                    }else
                    {
                        throw new Exception("Row not found.");
                    }
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public static int Add(int userid, int gameid, int score, bool iswinner, bool rollback = false)
        {
            using (ScrabbleEntities dc = new ScrabbleEntities())
            {
                DbContextTransaction transaction = null;
                if (rollback) transaction = dc.Database.BeginTransaction();

                tblUserGame ug = new tblUserGame();
                ug.Id = dc.tblUserGames.Any() ? dc.tblUserGames.Max(p => p.Id) + 1 : 1;
                ug.GameId = gameid;
                ug.UserId = userid;
                ug.PlayerScore = score;
                ug.IsWinner = iswinner;
                dc.tblUserGames.Add(ug);
                int results = dc.SaveChanges();

                if (rollback) transaction.Rollback();
                return results;
            }
        }

    }
}
