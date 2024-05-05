import React from 'react';
import './App.css';
import TodoWrapper from './components/TodoWrapperComponents/TodoWrapper';
import WeatherComponent from './components/weatherComponents/Weather'; 

const App = () => (
  <div className="App">
    <TodoWrapper />
    <WeatherComponent />
  </div>
);


export default App;
