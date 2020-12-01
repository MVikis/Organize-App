using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Organize.Models.VM
{
    public class SearchItemsVM
    {
        public int ItemId { get; set; }
        public string ItemName { get; set; }

        public int ContainerId { get; set; }
        public string ContainerName { get; set; }
    }
}
