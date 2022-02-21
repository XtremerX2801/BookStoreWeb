using System.ComponentModel.DataAnnotations;

namespace Rookies.Backend
{
    public class Book
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string BookName { get; set; }

        public string? Author { get; set; }    }
}