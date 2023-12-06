import React from 'react';
import { Link } from "react-router-dom";

export const Card = ({ data }) => {
  return (
    <>
      <ul className="card-deck row">
        {data.map((helado) => (
          <Link key={helado.id} to={`/detalle/${helado.id}`} className="card col-md-4 mb-4 text-decoration-none">
            <img src={helado.img} className="card-img-top" alt={helado.name} />
            <div className="card-body">
              <h5 className="card-title">{helado.name}</h5>
              <p className="card-text">{helado.description}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">ir al producto...</small>
            </div>
          </Link>
        ))}
      </ul>
    </>
  );
};
