using System.ComponentModel.DataAnnotations;

namespace backendvale.Entities
{
    public class UsuarioEntity
    {

        [Key]

        public long Id { get; set; }

        public string Nome { get; set; }

        public string Email { get; set; }

        public string Endereço { get; set; }

        public string Telefone { get; set; }

        public string Destino { get; set; }

        public DateTime CriacaoDeUsuario { get; set; } = DateTime.Now;

        public DateTime UltimaAtualizacao {  get; set; } = DateTime.Now;
    }
}
