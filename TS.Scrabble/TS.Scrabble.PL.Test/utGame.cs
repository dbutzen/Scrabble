using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace TS.Scrabble.PL.Test
{
    [TestClass]
    public class utGame
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
            Assert.AreEqual(4, dc.tblGames.Count());
        }

        [TestMethod]
        public void InsertTest()
        {
            tblGame row = new tblGame();
            row.Id = -1;
            row.Name = "Dog";
            row.Password = "dog";
            row.GameState = "";
            row.DatePlayed = DateTime.Now;

            dc.tblGames.Add(row);

            int results = dc.SaveChanges();

            Assert.IsTrue(results > 0);
        }

        [TestMethod]
        public void UpdateTest()
        {
            InsertTest();

            tblGame row = dc.tblGames.FirstOrDefault(g => g.Id == -1);

            int results = 0;

            if(row != null)
            {
                row.Name = "Cat";
                results = dc.SaveChanges();
            }

            Assert.IsTrue(results > 0);
        }

        [TestMethod]
        public void DeleteTest()
        {
            InsertTest();

            tblGame row = dc.tblGames.FirstOrDefault(g => g.Id == -1);

            int results = 0;

            if (row != null)
            {
                dc.tblGames.Remove(row);
                results = dc.SaveChanges();
            }

            Assert.IsTrue(results > 0);
        }
    }
}
