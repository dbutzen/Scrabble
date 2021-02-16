using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TS.Scrabble.PL;
using TS.Scrabble.BL.Models;
using System.Data.Entity;

namespace TS.Scrabble.BL
{
    public static class UserManager
    {
        public static int Insert(User user, bool rollback = false)
        {
            try
            {
                int results = 0;
                using (ScrabbleEntities dc = new ScrabbleEntities())
                {
                    DbContextTransaction transaction = null;
                    if (rollback) transaction = dc.Database.BeginTransaction();

                    tblUser row = new tblUser();

                    row.Id = dc.tblUsers.Any() ? dc.tblUsers.Max(dt => dt.Id) + 1 : 1;
                    row.FirstName = user.FirstName;
                    row.LastName = user.LastName;
                    row.Email = user.Email;
                    row.Password = user.Password;
                    row.Losses = user.Losses;
                    row.Wins = user.Wins;
                    row.Score = user.Score;
                    row.UserName = user.Username;
                    row.UserCreationDate = user.CreationDate;

                    user.Id = row.Id;
                    dc.tblUsers.Add(row);
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

        public static int Update(User user, bool rollback = false)
        {
            try
            {
                int results = 0;
                using (ScrabbleEntities dc = new ScrabbleEntities())
                {
                    DbContextTransaction transaction = null;
                    if (rollback) transaction = dc.Database.BeginTransaction();

                    tblUser row = dc.tblUsers.FirstOrDefault(dt => dt.Id == user.Id);

                    if (row != null)
                    {
                        row.FirstName = user.FirstName;
                        row.LastName = user.LastName;
                        row.Email = user.Email;
                        row.Losses = user.Losses;
                        row.Wins = user.Wins;
                        row.Score = user.Score;
                        row.UserName = user.Username;
                        row.UserCreationDate = user.CreationDate;

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

        public static int Delete(User user, bool rollback = false)
        {
            try
            {
                int results = 0;
                using (ScrabbleEntities dc = new ScrabbleEntities())
                {
                    DbContextTransaction transaction = null;
                    if (rollback) transaction = dc.Database.BeginTransaction();

                    tblUser row = dc.tblUsers.FirstOrDefault(dt => dt.Id == user.Id);

                    if (row != null)
                    {
                        dc.tblUsers.Remove(row);

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

        public static List<User> Load()
        {
            try
            {
                List<User> rows = new List<User>();
                using (ScrabbleEntities dc = new ScrabbleEntities())
                {
                    dc.tblUsers.ToList().ForEach(dt => rows.Add(new User
                    {
                        Id = dt.Id,
                        FirstName = dt.FirstName,
                        LastName = dt.LastName,
                        Username = dt.UserName,
                        Email = dt.Email,
                        CreationDate = dt.UserCreationDate,
                        Score = dt.Score,
                        Wins = dt.Wins,
                        Losses = dt.Losses
                    }));
                    return rows;
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public static List<User> Load(int gameid)
        {
            try
            {
                List<User> rows = new List<User>();
                List<User> userids = new List<User>();
                using (ScrabbleEntities dc = new ScrabbleEntities())
                {
                    dc.tblUserGames.Where(g => g.Id == gameid).ToList().ForEach(g => userids.Add(new User
                    {
                        Id = g.Id,
                    }));
                    foreach(User user in userids)
                    {
                        dc.tblUsers.Where(u => u.Id == user.Id).ToList().ForEach(dt => rows.Add(new User
                        {
                            Id = dt.Id,
                            FirstName = dt.FirstName,
                            LastName = dt.LastName,
                            Username = dt.UserName,
                            Email = dt.Email,
                            CreationDate = dt.UserCreationDate,
                            Score = dt.Score,
                            Wins = dt.Wins,
                            Losses = dt.Losses
                        }));
                    }
                    
                    return rows;
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public static User LoadById(int id)
        {
            try
            {
                using (ScrabbleEntities dc = new ScrabbleEntities())
                {
                    tblUser row = dc.tblUsers.FirstOrDefault(dt => dt.Id == id);
                    if (row != null)
                    {
                        User user = new User 
                        { 
                            Id = row.Id,
                            FirstName = row.FirstName,
                            LastName = row.LastName,
                            Username = row.UserName,
                            Email = row.Email,
                            CreationDate = row.UserCreationDate,
                            Losses = row.Losses,
                            Wins = row.Wins,
                            Score = row.Score
                        };
                        return user;

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
