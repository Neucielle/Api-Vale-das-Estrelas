import React from "react";
import "./add-usuario.scss"; //
import { TextField, Button } from "@mui/material";
import { IUsuarios } from "../../types/global.typing";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../constants/url.constant";

const AddUsuario: React.FC = () => {
  const [usuario, setUsuario] = React.useState<Partial<IUsuarios>>({
    nome: "",
    email: "",
    endereço: "",
    telefone: "",
    destino: "",
  });
  const redirect = useNavigate();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value,
    });
  };

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
      .post(baseUrl, data)
      .then((response) => redirect("/usuarios", {
          state: { message: "Usuário criado com sucesso" }
        })
      )
      .catch((error) => alert("Erro"));
  };

  const handleBackBtnClick = () => {
    redirect("/usuarios");
  };

  return (
    <div className="add-usuario">
      <h2>Cadastrar novo Usuário</h2>
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

export default AddUsuario;
