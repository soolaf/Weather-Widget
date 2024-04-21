import axios from 'axios';

const API_KEY = 'e20f30d80cbf690ebd2324356880c94e';

export const fetchWeatherData = async (location: string): Promise<any> => {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(API_URL);
    const weatherData = response.data;
    console.log('Weather data:', weatherData);
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
