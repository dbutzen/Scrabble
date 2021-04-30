using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TS.Scrabble.BL;
using TS.Scrabble.MVCUI._2.Models;

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
            if (Authenticate.IsAuthenticated())
            {
                ViewBag.Message = "Your contact page.";
                return View();
            }
            else
                return RedirectToAction("Login", "User", new { returnurl = HttpContext.Request.Url });
        }

        public ActionResult GameboardMulti()
        {
            if (Authenticate.IsAuthenticated())
            {
                ViewBag.Message = "Your contact page.";
                return View();
            }
            else
                return RedirectToAction("Login", "User", new { returnurl = HttpContext.Request.Url });
        }

        public ActionResult Chat()
        {
            return View();
        }

        public ActionResult Shape()
        {
            return View();
        }
        public JsonResult Challenge(string challengedWord = "")
        {
            if (!string.IsNullOrWhiteSpace(challengedWord))
            {
                return Json(Merriam_WebsterManager.Definition(challengedWord), JsonRequestBehavior.AllowGet);
            }
            return Json(null, JsonRequestBehavior.AllowGet);
        }
    }
}