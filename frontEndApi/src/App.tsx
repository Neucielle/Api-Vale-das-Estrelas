import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home.page';
import Usuarios from './pages/usuarios/Usuarios.page';
import AddUsuario from './pages/add-usuario/AddUsuario.page';
import EditUsuario from './pages/edit-usuario/EditUsuario.page';
import DeleteUsuario from './pages/delete-usuario/DeleteUsuario.page';



const App: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Wrapper */}
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios">
          <Route index element={<Usuarios />} />
            <Route path="add" element={<AddUsuario />} />
            <Route path="edit/:id" element={<EditUsuario />} />
            <Route path="delete/:id" element={<DeleteUsuario />} />


          </Route>
        </Routes>
      </div>
    </div>
  );
}
export default App