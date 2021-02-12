using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace TS.Scrabble.PL.Test
{
    [TestClass]
    public class utDictionary
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
            Assert.AreEqual(5, dc.tblDictionaries.Count());
        }

        [TestMethod]
        public void InsertTest()
        {
            tblDictionary row = new tblDictionary();
            row.Id = -1;
            row.Word = "Smile";
            row.Definition = "Someone is happy";

            dc.tblDictionaries.Add(row);

            int results = dc.SaveChanges();

            Assert.IsTrue(results > 0);
        }

        [TestMethod]
        public void UpdateTest()
        {
            InsertTest();

            tblDictionary row = dc.tblDictionaries.FirstOrDefault(g => g.Id == -1);

            int results = 0;

            if (row != null)
            {
                row.Definition = "Someone is not sad probably";
                results = dc.SaveChanges();
            }

            Assert.IsTrue(results > 0);
        }

        [TestMethod]
        public void DeleteTest()
        {
            InsertTest();

            tblDictionary row = dc.tblDictionaries.FirstOrDefault(g => g.Id == -1);

            int results = 0;

            if (row != null)
            {
                dc.tblDictionaries.Remove(row);
                results = dc.SaveChanges();
            }

            Assert.IsTrue(results > 0);
        }
    }
}
