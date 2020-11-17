using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Organize.Models
{
    public class ContainerDbContext : DbContext
    {
        public ContainerDbContext(DbContextOptions<ContainerDbContext> options) : base(options)
        {

        }
        public DbSet<Container> Containers { get; set; }
    }
}

