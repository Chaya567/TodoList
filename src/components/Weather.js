import React, { useState, useEffect } from 'react';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const API_KEY = 'b71ca2424f7ca2f981190ce292e41ccd';
    const city = 'Tel Aviv';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const temperature = weatherData.main.temp;
  const weatherDescription = weatherData.weather[0].description;

  return (
    <div className='WeatherComponent '>
      <h2>Weather in Tel Aviv</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Weather: {weatherDescription}</p>
    </div>
  );
};

export default WeatherComponent;
