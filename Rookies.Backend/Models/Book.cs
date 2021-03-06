using System.ComponentModel.DataAnnotations;

namespace Rookies.Backend.Models
{
    public class Book
    {
        [Key]
        public int BookId { get; set; }

        [Required]
        public string BookName { get; set; }

        public string? Author { get; set; }    

        [Required]
        public string BookCategory { get; set; }

        public int? BookPrice { get; set; }

        public string? BookImg { get; set; }

    }
}