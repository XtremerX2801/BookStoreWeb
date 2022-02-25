using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Rookies.Backend.Models
{
    public class User: IdentityUser
    {
        [Column(TypeName = "nvarchar")]
        [StringLength(400)]
        public string UserAddress { get; set; }
    }
}
