using Microsoft.AspNetCore.Mvc;
using Rookies.CustomerSites.Services;

namespace Rookies.CustomerSites.ViewComponents
{
    public class BookByCategoryViewComponent : ViewComponent
    {
        private readonly IBookService _booksService;
        public BookByCategoryViewComponent(IBookService booksService)
        {
            _booksService = booksService;
        }
        public async Task<IViewComponentResult> InvokeAsync(string category)
        {
            var books = await _booksService.GetBookByCategoryAsync(category);
            return View(books);
        }
    }
}
