﻿using System.ComponentModel.DataAnnotations;

namespace Rookies.CustomerSites.Models
{
    public class Category
    {
        public string CategoryName { get; set; }

        public int DisplayOrder { get; set; }

        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }
}
