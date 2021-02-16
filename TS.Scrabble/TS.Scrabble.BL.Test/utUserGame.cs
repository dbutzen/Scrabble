using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using TS.Scrabble.BL;

namespace TS.Scrabble.BL.Test
{
    [TestClass]
    public class utUserGame
    {
        [TestMethod]
        public void RemoveTest()
        {
            Assert.IsTrue(UserGameManager.Remove(1, 1, true) > 0);
        }

        [TestMethod]
        public void AddTest()
        {
            Assert.IsTrue(UserGameManager.Add(1, 2, 45, true, true) > 0);
        }
    }
}
