import React from 'react'
import './edit-usuario.scss';
import { IUsuarios } from '../../types/global.typing';
import { useNavigate, Params, useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { baseUrl } from '../../constants/url.constant';
import axios from 'axios';


const EditUsuario: React.FC = () => {
    const [usuario, setUsuario] = React.useState<Partial<IUsuarios>>({
        nome: "",
        email: "",
        endereço: "",
        telefone: "",
        destino: "",
      });

      const redirect = useNavigate();
      const {id} = useParams();

      const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsuario({
          ...usuario,
          [event.target.name]: event.target.value,
        });
      };

      React.useEffect(() => {
        axios.get<IUsuarios>(`${baseUrl}/${id}`).then((response) =>
        setUsuario({
           nome: response.data.nome,
           email: response.data.email,
           endereço: response.data.endereço,
           telefone: response.data.telefone,
           destino: response.data.destino,
           

        })
     );
      }, [])




      const handleSaveBtnClick = () => {
        if (
          usuario.nome === "" ||
        usuario.email === "" ||
          usuario.telefone === "" ||
          usuario.endereço === "" ||
          usuario.destino === ""
        ) {
          alert("Digite seus dados");
          return;
        }
    
        const data: Partial<IUsuarios> = {
          nome: usuario.nome,
          email: usuario.email,
          endereço: usuario.endereço,
          telefone: usuario.telefone,
          destino: usuario.destino,
        };
    
        axios
          .put(`${baseUrl}/${id}`, data)
          .then((response) => redirect("/usuarios", {
              state: { message: "Usuário atualizado com sucesso" }
            })
          )
          .catch((error) => alert("Erro"));
      };
    
      const handleBackBtnClick = () => {
        redirect("/usuarios");
      };





  return (
    <div className='edit-usuario'>
        <h2>Editar Usuário</h2>
        <TextField
        autoComplete="off"
        label="Nome"
        variant="outlined"
        name="nome"
        value={usuario.nome}
        onChange={changeHandler}
      />
      <TextField
        autoComplete="off"
        label="Email"
        variant="outlined"
        name="email"
        value={usuario.email}
        onChange={changeHandler}
      />
      <TextField
        autoComplete="off"
        label="Endereço"
        variant="outlined"
        name="endereço"
        value={usuario.endereço}
        onChange={changeHandler}
      />

      <TextField
        autoComplete="off"
        label="telefone"
        variant="outlined"
        name="telefone"
        value={usuario.telefone}
        onChange={changeHandler}
      />

      <TextField
        autoComplete="off"
        label="Destino"
        variant="outlined"
        name="destino"
        value={usuario.destino}
        onChange={changeHandler}
      />

      <div>
        <Button variant="outlined" color="primary" onClick={handleSaveBtnClick}>
          Save
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBackBtnClick}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default EditUsuario