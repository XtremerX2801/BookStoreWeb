using Microsoft.AspNetCore.Mvc;
using Rookies.CustomerSites.Services;

namespace Rookies.CustomerSites.ViewComponents
{
    public class BookViewComponent : ViewComponent
    {
        private readonly IBookService _bookService;
        public BookViewComponent(IBookService bookService)
        {
            _bookService = bookService;
        }
        public async Task<IViewComponentResult> InvokeAsync(int id)
        {
            var book = await _bookService.GetBookAsync(id);
            return View(book);
        }
    }
}