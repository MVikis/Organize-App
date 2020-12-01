﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Organize.Models
{
    public class Item
    {
        public int ItemId { get; set; }
        public string ItemName { get; set; }

        [ForeignKey("Container")]
        public int ContainerId { get; set; }
        public Container Container { get; set; }


    }
}
