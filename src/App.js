import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowGrid from './ShowGrid';
import ShowDetails from './ShowDetails';
import axios from 'axios';
import './index.css';

const App = () => {
  const [shows, setShows] = React.useState([]);

  React.useEffect(() => {
    const fetchShows = async () => {
      const response = await axios.get('https://api.tvmaze.com/shows');
      setShows(response.data);
    };

    fetchShows();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowGrid shows={shows} />} />
        <Route path="/show/:id" element={<ShowDetails />} />
      </Routes>
    </Router>
  );
};

export default App;