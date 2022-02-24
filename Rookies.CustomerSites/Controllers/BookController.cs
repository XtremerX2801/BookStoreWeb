using Microsoft.AspNetCore.Mvc;

namespace Rookies.CustomerSites.Controllers
{
    public class BookController : Controller
    {
        private readonly ILogger<BookController> _logger;

        public BookController(ILogger<BookController> logger)
        {
            _logger = logger;
        }

        [Route("book/{id}")]
        public IActionResult Index(int id)
        {
            return View(id);
        }
    }
}
