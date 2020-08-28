using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FullCoreApi.Models
{
    public class ReaderContext : DbContext
    {
        public ReaderContext(DbContextOptions<ReaderContext> options) : base(options)
        {
            
        }

        public DbSet<Reader> Readers { get; set; }
    }
}
