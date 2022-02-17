using System.ComponentModel.DataAnnotations;

namespace BookStoreWebApp.Model
{
    public class Book
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string BookName { get; set; }

        public int Author { get; set; }
    }
}
