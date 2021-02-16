using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TS.Scrabble.BL.Models;
using TS.Scrabble.PL;

namespace TS.Scrabble.BL
{
    public static class UserGameManager
    {
        public static void Remove(int userid, int gameid)
        {
            using (ScrabbleEntities dc = new ScrabbleEntities())
            {
                tblUserGame ug = dc.tblUserGames.FirstOrDefault(u => u.UserId == userid && u.GameId == gameid);
                if (ug != null)
                {
                    dc.tblUserGames.Remove(ug);
                    dc.SaveChanges();
                }
            }
        }
        public static void Add(int userid, int gameid, int score, bool iswinner)
        {
            using (ScrabbleEntities dc = new ScrabbleEntities())
            {
                tblUserGame ug = new tblUserGame();
                ug.Id = dc.tblUserGames.Any() ? dc.tblUserGames.Max(p => p.Id) + 1 : 1;
                ug.GameId = gameid;
                ug.UserId = userid;
                ug.PlayerScore = score;
                ug.IsWinner = iswinner;
                dc.tblUserGames.Add(ug);
                dc.SaveChanges();

            }
        }

    }
}
