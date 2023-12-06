import React from 'react'
import {Routes, Route} from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { NavLink } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <>
      <div className='container'>
        <nav className="navbar navbar-expand-sm navbar-dark">
          <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto">

                <NavLink to="/HomePage" className="nav-link btn btn-outline-primary">
                Home
                </NavLink>

              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/*' element={<HomePage />}/>
        <Route path='/HomePage' element={<HomePage />}/>
      </Routes>
    </>
  )
}
