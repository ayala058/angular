using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1
{

    public class Recipe
    {
        public static int cnt = 0;
        public int code { get; set; }
        public string name { get; set; }
        public Category category { get; set; }
        public int duration { get; set; }
        public int difficult { get; set; }
        public int date { get; set; }
        public string[] product { get; set; }
        public string[] preparation { get; set; }
        public int userCode { get; set; }
        public string urlPicture { get; set; }

        public Recipe(int b,string n, Category c, int d, int di, int dat, string[] p1, string[] p2, int u, string ur)
        {
            code = cnt++;
            name = n;
            category = c;
            duration = d;
            difficult = di;
            date = dat;
            product = p1;
            preparation = p2;
            userCode = u;
            urlPicture = ur;

        }
    }
}