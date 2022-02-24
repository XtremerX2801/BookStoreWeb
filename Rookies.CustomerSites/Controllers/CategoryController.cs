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

        [Route("category")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
