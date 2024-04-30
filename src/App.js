import React from 'react';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import WeatherComponent from './components/Weather'; 

function App() {
  return (
    <div className="App">
      <TodoWrapper />
      <WeatherComponent /> {/* הוסף את הקומפוננטה של מזג האוויר */}
    </div>
  );
}

export default App;
