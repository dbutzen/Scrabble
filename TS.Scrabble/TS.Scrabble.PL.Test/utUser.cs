using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace TS.Scrabble.PL.Test
{
    [TestClass]
    public class utUser
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
            Assert.AreEqual(4, dc.tblUsers.Count());
        }

        [TestMethod]
        public void InsertTest()
        {
            tblUser row = new tblUser();
            row.Id = -1;
            row.FirstName = "Shawn";
            row.LastName = "Scrabble";
            row.Password = "ahaha";
            row.Email = "email@email";
            row.UserName = "SHawnCrabble";
            row.Score = 1;
            row.UserCreationDate = DateTime.Now;
            row.Wins = 0;
            row.Losses = 1;

            dc.tblUsers.Add(row);

            int results = dc.SaveChanges();

            Assert.IsTrue(results > 0);
        }

        [TestMethod]
        public void UpdateTest()
        {
            InsertTest();

            tblUser row = dc.tblUsers.FirstOrDefault(g => g.Id == -1);

            int results = 0;

            if (row != null)
            {
                row.Wins = 1;
                results = dc.SaveChanges();
            }

            Assert.IsTrue(results > 0);
        }

        [TestMethod]
        public void DeleteTest()
        {
            InsertTest();

            tblUser row = dc.tblUsers.FirstOrDefault(g => g.Id == -1);

            int results = 0;

            if (row != null)
            {
                dc.tblUsers.Remove(row);
                results = dc.SaveChanges();
            }

            Assert.IsTrue(results > 0);
        }
    }
}
