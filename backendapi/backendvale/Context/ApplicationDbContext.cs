using backendvale.Entities;
using Microsoft.EntityFrameworkCore;

namespace backendvale.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<UsuarioEntity> Usuarios { get; set; }
    }
}
