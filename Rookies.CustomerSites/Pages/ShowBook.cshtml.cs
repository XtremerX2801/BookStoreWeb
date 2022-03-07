using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
namespace Rookies.CustomerSites.Pages
{
    public class BookSearchModel : PageModel
    {

        [BindProperty(SupportsGet = true)]
        public string BookName { get; set; }

        [BindProperty(SupportsGet = true)]
        public string GetBookName { get; set; }

        public void OnGet()
        {
            if (BookName == null)
            {
                GetBookName = "";
            }
            else if (BookName != null)
            {
                GetBookName = $"search/{BookName}";
            }
        }
    }
}
