import React from "react";
import "./delete-usuario.scss";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { IUsuarios } from "../../types/global.typing";
import { baseUrl } from "../../constants/url.constant";
import { Button } from "@mui/material";

const DeleteUsuario = () => {
  const redirect = useNavigate();
  const { id } = useParams();

  const handleDeleteBtnClick = () => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then(() =>
        redirect("/usuarios", {
          state: { message: "Usuário removido com sucesso" },
        })
      )
      .catch((error) => alert("Erro ao excluir o usuário: " + error.message));
  };

  const handleBackBtnClick = () => {
    redirect("/usuarios");
  };

  return (
    <div className="delete-usuario">
      <h2>Excluir Usuário</h2>
      <h4>Você tem certeza que deseja excluir esse usuário?</h4>
      <div>
        <Button
          variant="outlined"
          color="error"
          onClick={handleDeleteBtnClick}
        >
          Sim
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBackBtnClick}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
};

export default DeleteUsuario;
