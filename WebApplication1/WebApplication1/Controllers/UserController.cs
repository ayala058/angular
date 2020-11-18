using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        [HttpPost]
        public bool Edit([FromBody]Recipe r)
        {
            foreach(Recipe t in DB.RecipeList)
            {
                if(r.code==t.code)
                {
                    DB.RecipeList[r.code] = r;
                    return true;
                }
            }
            return false;
        }
        [HttpGet]
        public User Func1()
        {
            return DB.UserList[1];
        }
        [HttpPost]
        public int login([FromBody]User s)
        {
            foreach (User d in DB.UserList)
            {
                if (d != null)
                {
   if (s.name == d.mail && s.address == d.password)
                { return d.code; }
                if (s.name == d.mail)
                { return 200; }
                }
             
            }


            return 300;

        }
        [HttpPost]
        public void  adduser([FromBody]User s)
        {
            DB.UserList.Add(s);
          

        }

        [HttpGet]
        public List<Recipe>  getallrecipe()
        {
            return DB.RecipeList;
        }

        [HttpGet]
        public List<Category> getallCategory()
        {
            return DB.CategoryList;
        }


        [HttpPost]
        public void addRecipe([FromBody]Recipe r)
        {
           DB.RecipeList.Add(r);
        }


    }
}


