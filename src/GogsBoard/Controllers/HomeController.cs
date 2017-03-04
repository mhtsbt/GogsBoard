using GogsBoard.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Collections.Generic;

namespace GogsBoard.Controllers
{
    public class HomeController : Controller
    {
   
        public IActionResult Index()
        {
            return View();
        }

        [Route("repo/{user}/{project}")]
        public IActionResult ProjectPage()
        {
            return View("Index");
        }

    }
}
