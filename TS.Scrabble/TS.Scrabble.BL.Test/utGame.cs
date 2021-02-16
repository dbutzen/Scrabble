using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using TS.Scrabble.BL.Models;

namespace TS.Scrabble.BL.Test
{
    [TestClass]
    public class utGame
    {
        [TestMethod]
        public void InsertTest()
        {
            Assert.IsTrue(GameManager.Insert(new Game { Id = -1, DatePlayed = DateTime.Now, Name = "Turtle", GameState = "", Password = "pass" }, true) > 0);
        }
        [TestMethod]
        public void UpdateTest()
        {
            Game game = GameManager.LoadById(1);
            game.Name = "Turtle";
            Assert.IsTrue(GameManager.Update(game, true) > 0);
        }
        [TestMethod]
        public void DeleteTest()
        {
            Game game = GameManager.LoadById(1); //Will not work as is due to UserGame JunctionTable.
            Assert.IsTrue(GameManager.Delete(game, true) > 0);
        }
        [TestMethod]
        public void LoadTest()
        {
            Assert.AreEqual(4, GameManager.Load().Count);
        }
    }
}
