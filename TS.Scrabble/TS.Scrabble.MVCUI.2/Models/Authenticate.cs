﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TS.Scrabble.MVCUI._2.Models
{
    public class Authenticate
    {
        public static bool IsAuthenticated()
        {
            if (HttpContext.Current.Session == null)
                return false;
            else
                return HttpContext.Current.Session["user"] != null;
        }
    }
}