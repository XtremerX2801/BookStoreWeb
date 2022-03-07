using Microsoft.AspNetCore.Mvc;

namespace Rookies.CustomerSites.Controllers
{
    public class CategoryController : Controller
    {

        private readonly ILogger<CategoryController> _logger;

        public CategoryController(ILogger<CategoryController> logger)
        {
            _logger = logger;
        }

        [Route("category/education")]
        public IActionResult Education()
        {
            return View();
        }

        [Route("category/novel")]
        public IActionResult Novel()
        {
            return View();
        }

        [Route("category/cooking")]
        public IActionResult Cooking()
        {
            return View();
        }

        [Route("category/travel")]
        public IActionResult Travel()
        {
            return View();
        }

        [Route("category/arts")]
        public IActionResult Arts()
        {
            return View();
        }
    }
}
