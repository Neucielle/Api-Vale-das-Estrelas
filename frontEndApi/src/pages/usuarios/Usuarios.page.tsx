import { useState, useEffect } from "react";
import "./usuarios.scss";
import axios from "axios";
import { baseUrl } from "../../constants/url.constant";
import { IUsuarios } from "../../types/global.typing";
import Button from "@mui/material/Button";
import { Edit, Delete } from "@mui/icons-material";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Usuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<IUsuarios[]>([]);
  const location = useLocation();
  const redirect = useNavigate();

  console.log(location);

  const fetchUsuariosList = async () => {
    try {
      const response = await axios.get<IUsuarios[]>(baseUrl);
      setUsuarios(response.data);
      if (location?.state) {
        Swal.fire({
          icon: "success",
          title: location?.state?.message,
        });
        redirect(location.pathname, { replace: true });
      }
    } catch (error) {
      alert("Ocorreu um Erro");
    }
  };

  useEffect(() => {
    fetchUsuariosList();
  }, []);

  // console.log(Usuarios);

  const redirectToEditPage = (id: string) => {
    redirect(`/usuarios/edit/${id}`);
  };

  const redirectToDeletePage = (id: string) => {
    redirect(`/usuarios/delete/${id}`);
  };

  return (
    <div className="usuarios">
      <h1 className="lista">Lista de Usuários</h1>
      {usuarios.length === 0 ? (
        <h1>Não há usuários cadastrados</h1>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Endereço</th>
                <th>Telefone</th>
                <th>Destino</th>
                <th>Data de Cadastro</th>
                <th>Última atualização</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.endereço}</td>
                  <td>{usuario.telefone}</td>
                  <td>{usuario.destino}</td>
                  <td>{moment(usuario.criacaoDeUsuario).fromNow()}</td>
                  <td>{moment(usuario.ultimaAtualizacao).fromNow()}</td>
                  <td>
                    <Button
                      variant="outlined"
                      color="warning"
                      sx={{ mx: 3 }}
                      onClick={() => redirectToEditPage(usuario.id)}
                    >
                      <Edit />
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => redirectToDeletePage(usuario.id)}
                    >
                      <Delete />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Usuarios;
