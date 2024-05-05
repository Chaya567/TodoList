import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl);
    setWeatherData(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
