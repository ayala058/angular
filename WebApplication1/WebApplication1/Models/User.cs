using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class User
    {
        public static int cnt = 1;
        public int code { get; set; }
        public string name { get; set; }
        public string address { get; set; }
        public string mail { get; set; }
        public string password { get; set; }

        public User(string n,string add,string m,string pass)
        {
            code = cnt++;
            name = n;
            address = add;
            mail = m;
            password = pass;


        }

    }
}