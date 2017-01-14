using GogsBoard.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Collections.Generic;

namespace GogsBoard.Controllers
{
    public class ConfigController : Controller
    {

        private readonly GogsBoardOptions _options;

        public ConfigController(IOptions<GogsBoardOptions> options)
        {
            _options = options.Value;
        }

        [Route("/api/config"), HttpGet]
        public GogsBoardOptions GetConfig()
        {
            return _options;
        }

    }
}
