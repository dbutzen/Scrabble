using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace TS.Scrabble.PL.Test
{
    [TestClass]
    public class utUserGame
    {
        protected ScrabbleEntities dc;
        protected DbContextTransaction transaction;

        [TestInitialize]
        public void Initialize()
        {
            dc = new ScrabbleEntities();
            transaction = dc.Database.BeginTransaction();
        }

        [TestCleanup]
        public void TestCleanup()
        {
            transaction.Rollback();
            transaction.Dispose();
        }

        [TestMethod]
        public void LoadTest()
        {
            Assert.AreEqual(4, dc.tblUserGames.Count());
        }

        [TestMethod]
        public void InsertTest()
        {
            tblUserGame row = new tblUserGame();
            row.Id = -1;
            row.GameId = dc.tblGames.FirstOrDefault().Id;
            row.UserId = dc.tblUsers.FirstOrDefault().Id;
            row.IsWinner = false;
            row.PlayerScore = 7;


            dc.tblUserGames.Add(row);

            int results = dc.SaveChanges();

            Assert.IsTrue(results > 0);
        }

        [TestMethod]
        public void UpdateTest()
        {
            InsertTest();

            tblUserGame row = dc.tblUserGames.FirstOrDefault(g => g.Id == -1);

            int results = 0;

            if (row != null)
            {
                row.IsWinner = true;
                results = dc.SaveChanges();
            }

            Assert.IsTrue(results > 0);
        }

        [TestMethod]
        public void DeleteTest()
        {
            InsertTest();

            tblUserGame row = dc.tblUserGames.FirstOrDefault(g => g.Id == -1);

            int results = 0;

            if (row != null)
            {
                dc.tblUserGames.Remove(row);
                results = dc.SaveChanges();
            }

            Assert.IsTrue(results > 0);
        }
    }
}
