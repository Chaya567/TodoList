import React, { useState, useEffect } from 'react';
import styles from './WeatherComponent.module.css';
import axios from 'axios';
import { apiUrl } from './WeatherConstants';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const temperature = weatherData.main.temp;
  const weatherDescription = weatherData.weather[0].description;

  return (
    <div className={styles.WeatherComponent}>
      <h2>Weather in Tel Aviv</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Weather: {weatherDescription}</p>
    </div>
  );
};

export default Weather;
