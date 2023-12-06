import React from 'react'
import {Routes, Route} from 'react-router-dom';
import { FormTask } from '../ts01-task-app/components/FormTask';
import { HomeNavBar } from './HomeNavBar';
import { NavLink } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <>
      <div className='container'>
        <nav className="navbar navbar-expand-sm navbar-dark">
          <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto">

                <NavLink to="/FormTask" className="nav-link btn btn-outline-primary">
                FormTask
                </NavLink>

              </ul>
            </div>
          </div>
        </nav>

      <h1>En esta sección están las rutas</h1>
    </div>

    <Routes>
      <Route path='/' element={<HomeNavBar />}/>
      <Route path='/FormTask' element={<FormTask />}/>
    </Routes>


    </>
  )
}
