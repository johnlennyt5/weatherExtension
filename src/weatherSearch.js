// WeatherSearch.js
import React, { useState } from 'react';
import axios from 'axios';

function WeatherSearch() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');

  const fetchData = async () => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`;
    const options = {
      headers: {
        'X-RapidAPI-Key': '2fd22f1714msh5fd5d08594c6f14p1a1170jsn5e863658d1bd',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.get(url, options);
      const data = response.data;

      setLocation(`City: ${data.location.name}, ${data.location.region}, ${data.location.country}`);
      setWeather(`Temperature: ${data.current.temp_c}°C, ${data.current.temp_f}°F`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    fetchData();
  };

  return (
    <div>
      <h2>Weather Search</h2>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter Zip Code..." />
      <button onClick={handleSearch}>Search</button>
      <ul>
        <li id="location">{location}</li>
        <li id="weather">{weather}</li>
      </ul>
    </div>
  );
}

export default WeatherSearch;
