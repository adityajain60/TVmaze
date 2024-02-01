import React from 'react';
import { Link } from 'react-router-dom';
import './ShowCard.css';

const ShowCard = ({ show }) => {
  return (
    <Link to={`/show/${show.id}`} className="show-card">
      <img src={show.image.medium} alt={show.name} className="show-image" />
      <div className="show-info">
        <h3 className="show-name">{show.name}</h3>
        <p className="show-genres">{show.genres.join(', ')}</p>
        <p className="show-rating">Average Rating: {show.rating.average}</p>
        <p className="show-status">Status: {show.status}</p>
      </div>
    </Link>
  );
};

export default ShowCard;