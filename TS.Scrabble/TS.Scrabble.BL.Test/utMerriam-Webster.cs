using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using TS.Scrabble.BL.Models;

namespace TS.Scrabble.BL.Test
{
    [TestClass]
    public class utMerriam_Webster
    {
        [TestMethod]
        public void DefinitionTest()
        {
            Merriam_WebsterManager.Definition("squall");
        }
    }
}
