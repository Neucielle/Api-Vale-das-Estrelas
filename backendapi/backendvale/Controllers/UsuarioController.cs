using backendvale.Context;
using backendvale.Dtos;
using backendvale.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backendvale.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsuarioController(ApplicationDbContext context)
        {
            _context = context;
        }

        //CRUD

        [HttpPost]
        public async Task<IActionResult> CriarUsuario([FromBody] CreateUpdateUsuarioDto dto)
        {
            var newUsuario = new UsuarioEntity()
            {
                Nome = dto.Nome,
                Email = dto.Email,
                Endereço = dto.Endereço,
                Telefone = dto.Telefone,
                Destino = dto.Destino,

            };

            await _context.Usuarios.AddAsync(newUsuario);
            await _context.SaveChangesAsync();

            return Ok("Usuário salvo com sucesso!");
        }

        [HttpGet]
        public async Task<ActionResult<List<UsuarioEntity>>> GetAllUsuarios()
        {
            var usuarios = await _context.Usuarios.OrderByDescending(q => q.UltimaAtualizacao).ToListAsync();
            return Ok(usuarios);
        }


        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<UsuarioEntity>> GetUsuarioByID([FromRoute] long id)
        {
            var usuario = await _context.Usuarios.FirstOrDefaultAsync(q => q.Id == id);

            if (usuario is null)
            {
                return NotFound("Usuário não encontrado!");
            }
            return Ok(usuario);

        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateUsuario([FromRoute] long id, [FromBody] CreateUpdateUsuarioDto dto)
        {
            var usuario = await _context.Usuarios.FirstOrDefaultAsync(q => q.Id == id);

            if (usuario is null)
            {
                return NotFound("Usuário não encontrado!");
            }

            usuario.Nome = dto.Nome;
            usuario.Email = dto.Email;
            usuario.Endereço = dto.Endereço;
            usuario.Telefone = dto.Telefone;
            usuario.Destino = dto.Destino;
            usuario.UltimaAtualizacao = DateTime.Now;

            await _context.SaveChangesAsync();

            return Ok("Usuário atualizado com sucesso!");
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteUsuario([FromRoute] long id)
        {
            var usuario = await _context.Usuarios.FirstOrDefaultAsync(q => q.Id == id);

            if (usuario is null)
            {
                return NotFound("Usuário não encontrado!");
            }

            _context.Usuarios.Remove(usuario);
            await _context.SaveChangesAsync();

            return Ok("Usuario deletado com sucesso!");
        }
    }

}