using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using TS.Scrabble.BL.Models;

namespace TS.Scrabble.BL.Test
{
    [TestClass]
    public class utUser
    {
        [TestMethod]
        public void InsertTest()
        {
            Assert.IsTrue(UserManager.Insert(new User {FirstName = "Bob", LastName = "Bob", Email = "Bob@bob.com", Password = "Bob", Losses = 0, Wins = 0, Score = 0, CreationDate = DateTime.Now, Username = "Bobby"}, true) > 0);
        }
        [TestMethod]
        public void UpdateTest()
        {
            User user = UserManager.LoadById(1);
            user.FirstName = "Turtle";
            Assert.IsTrue(UserManager.Update(user, true) > 0);
        }
        [TestMethod]
        public void DeleteTest()
        {
            User user = UserManager.LoadById(1); //Will not work as is due to UserGame JunctionTable.
            Assert.IsTrue(UserManager.Delete(user, true) > 0);
        }
        [TestMethod]
        public void LoadTest()
        {
            Assert.AreEqual(4, UserManager.Load().Count);
        }
        [TestMethod]
        public void LoadByGameIdTest()
        {
            Assert.AreEqual(4, UserManager.Load(2).Count);
        }
    }
}
