using System.ComponentModel.DataAnnotations;

namespace Rookies.Backend
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
    }
}