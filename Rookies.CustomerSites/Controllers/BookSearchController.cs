using Microsoft.AspNetCore.Mvc;

namespace Rookies.CustomerSites.Controllers
{
    public class BookSearchController : Controller
    {

        private readonly ILogger<BookSearchController> _logger;

        public BookSearchController(ILogger<BookSearchController> logger)
        {
            _logger = logger;
        }

        [Route("search")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
