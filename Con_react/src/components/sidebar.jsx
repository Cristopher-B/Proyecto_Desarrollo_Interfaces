import React from 'react';
import { NavLink } from 'react-router-dom'; // Importamos NavLink
import logoImg from '../assets/Logo.png'; 

const Sidebar = () => {
  return (
    <div className="sidebar col-auto">
      <div className="logo-container py-4 text-center">
        <div className="logoimg">
          <img src={logoImg} alt="Logo" style={{ width: '60px' }} />
        </div>
        <h2 className="logo mt-2">NEXUS</h2>
      </div>

      <ul className="menu list-unstyled ps-4">
        {/* NavLink añade la clase 'active' automáticamente al coincidir la URL */}
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "activo" : "")}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/library" className={({ isActive }) => (isActive ? "activo" : "")}>
            Biblioteca
          </NavLink>
        </li>
        <li>
          <NavLink to="/store" className={({ isActive }) => (isActive ? "activo" : "")}>
            Tienda
          </NavLink>
        </li>
        <li>
          <NavLink to="/recommendations" className={({ isActive }) => (isActive ? "activo" : "")}>
            Recomendaciones
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={({ isActive }) => (isActive ? "activo" : "")}>
            Novedades
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "activo" : "")}>
            Iniciar Sesión
          </NavLink>
        </li>

        <li className="mt-4">
          <button id="theme-toggle" className="sidebar-btn">
            <i className="fa-solid fa-moon"></i> Oscuro
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;