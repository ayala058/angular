using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1
{
    public class Category
    {
        public string code { get; set; }
        public string name { get; set; }
        public string url { get; set; }
        public Category(string c, string n, string u)
        {
            code = c;
            name = n;
            url = u;
        }
    }
}