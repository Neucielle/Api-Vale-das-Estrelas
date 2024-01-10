import { useState } from "react";
import "./navbar.scss";
import {Link} from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import Logo from '../../assets/images/foto-principal - Copia.png';


const Navbar: React.FC = () => {
   const [open, setOpen] = useState<boolean>(false);

   const toggleNavBar = () => {
    if(window.innerWidth < 500) {
      setOpen(!open);
    }
   };

   const menuStyle = open ? "menu open" : "menu";

  return (
    <div className="navbar">
      <div className="brand">
        <img className="logo" src={Logo} alt="Logo" />
      </div>

      <div className="hamburger">
        <Menu onClick={toggleNavBar} />
        </div>

      <div className={menuStyle}>
        <ul>
          <Close className="close" onClick={toggleNavBar} />
            <li onClick={toggleNavBar}><Link to="/">Home</Link></li>
            <li onClick={toggleNavBar}><Link to="/usuarios">Lista de Usuários</Link></li>
            <li onClick={toggleNavBar}><Link to="/usuarios/add">Cadastrar Usuário</Link></li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar
