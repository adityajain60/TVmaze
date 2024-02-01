import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ShowDetails.css';
import React, { useState, useEffect } from 'react';

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setShow(response.data);
    };

    fetchShow();
  }, [id]);

  return (
    <div className="show-details">
      {show ? (
        <>
          <h1>{show.name}</h1>
          <img src={show.image.medium} alt={show.name} />
          <p>{show.summary}</p>
          <h3>Genres:</h3>
          <ul>
            {show.genres.map(genre => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
          <h3>Status:</h3>
          <p>{show.status}</p>
          <h3>Runtime:</h3>
          <p>{show.runtime} min</p>
          <h3>Premiered:</h3>
          <p>{show.premiered}</p>
          <h3>Language:</h3>
          <p>{show.language}</p>
          <h3>Official Site:</h3>
          <a href={show.officialSite} target="_blank" rel="noopener noreferrer">
            {show.name} Official Site
          </a>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ShowDetails;