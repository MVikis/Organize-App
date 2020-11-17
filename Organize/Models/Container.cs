using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Organize.Models
{
    public class Container
    {
        public int ContainerId { get; set; }
        public string ContainerName { get; set; }
        public List<Item> Items { get; set; }

    }
}
