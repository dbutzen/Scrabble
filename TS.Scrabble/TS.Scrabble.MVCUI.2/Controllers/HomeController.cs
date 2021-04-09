using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TS.Scrabble.MVCUI._2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Home()
        {
            return View();
        }

        public ActionResult Data()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Gameboard()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult GameboardMulti()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Chat()
        {
            return View();
        }

        public ActionResult Shape()
        {
            return View();
        }
    }
}