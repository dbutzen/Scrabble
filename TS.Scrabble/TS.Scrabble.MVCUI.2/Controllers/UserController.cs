using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using TS.Scrabble.BL;
using TS.Scrabble.BL.Models;

namespace TS.Scrabble.MVCUI._2.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Login(string returnurl)
        {
            ViewBag.ReturnUrl = returnurl;
            return View();
        }

        [HttpPost]
        public ActionResult Login(User user)
        {
            try
            {
                if (UserManager.Login(user))
                {
                    Session["user"] = user;
                    Session["userid"] = user.Id;
                    Session["username"] = user.Username;
                    Session["email"] = user.Email;
                    
                    return RedirectToAction("Home", "Home");
                }
                else
                    {
                         ViewBag.Message = "Unable to Login";
                    }
                return View();
            }
            catch (Exception ex)
            {
                ViewBag.Message = ex.Message;
                return View();
            }
        }

        public ActionResult Logout()
        {
            Session["user"] = null;
            Session["userid"] = null;
            Session["username"] = string.Empty;
            Session["email"] = string.Empty;
            ViewBag.Message = "You have successfully logged out.";
            return View("Home", "Home");
        }



        // GET: User/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: User/Create
        public ActionResult Create()
        {
            return View(new User());
        }

        // POST: User/Create
        [HttpPost]
        public ActionResult Create(User user)
        {
            try
            {
                UserManager.Insert(user);
                return RedirectToAction("Login");
            }
            catch (Exception ex)
            {
                ViewBag.Message = ex.Message;
                return View();
            }
        }

        // GET: User/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        //View not created, will create when needed (create update account, create change password)
        // POST: User/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, User user)
        {
            try
            {
                UserManager.Update(user);

                return RedirectToAction("Home", "Home");
            }
            catch(Exception ex)
            {
                throw ex;
                //return View();
            }
        }

        // GET: User/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: User/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }


    }
}
