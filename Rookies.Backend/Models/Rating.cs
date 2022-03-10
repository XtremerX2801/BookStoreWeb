using System.ComponentModel.DataAnnotations;

namespace Rookies.Backend.Models
{
    public class Rating
    {
        [Key]
        public int RatingId { get; set; }

        [Required]
        public int BookId { get; set; }

        [Required]
        public int? RatingPoint { get; set; }    
    }
}