import "./home.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import fada from "../../assets/images/fada-removebg-preview.png";

const Home = () => {
  const redirect = useNavigate();
  return (
    <div className="home">
      <h1>Bem vindos ao Vale das Estrelas </h1>
      <h4>O voo do céu para os seus sonhos .</h4>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => redirect("/usuarios/add")}
      >
        Cadastro de Usuários
      </Button>

      <img src={fada} alt="fada" />

      <p>Vem com o vale, que te levamos aos lugares que algum dia já sonhou em conhecer, especialmente aqueles imaginados na infância. Pois além de dar nostalgia, deixaremos seu coração quentinho.</p>
    </div>
  );
};

export default Home;
