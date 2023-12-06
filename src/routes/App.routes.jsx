import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { HomePage, DetailProduct, CategoriasPage } from '../pages';

export const AppRoutes = () => {
  return (
    <>
      <div className='container'>
        <nav className="navbar navbar-expand-sm navbar-primary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto">
                <NavLink to="/HomePage" className="nav-link btn btn-outline-primary">
                  Home
                </NavLink>

                <NavLink to={`/CategoriasPage/crema`} className="nav-link btn btn-outline-primary mx-3">
                  Crema
                </NavLink>
                <NavLink to={`/CategoriasPage/agua`} className="nav-link btn btn-outline-primary">
                  Agua
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/detalle/:id" element={<DetailProduct />} />
        <Route path="/CategoriasPage/:categori" element={<CategoriasPage />} />
      </Routes>
    </>
  );
};
