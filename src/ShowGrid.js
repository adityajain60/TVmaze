import React from 'react';
import ShowCard from './ShowCard';
import './ShowGrid.css';

const ShowGrid = ({ shows }) => {
  return (
    <div className="show-grid">
      {shows.map(show => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
};

export default ShowGrid;