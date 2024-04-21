import React, { useEffect, useState } from 'react';
import { fetchWeatherData } from '../../services/weatherService';
import MoonSvg from "../../icons/Moon.svg";
import SunnySvg from "../../icons/Sun.svg";
import CloudDrizzleSvg from "../../icons/Cloud-Drizzle.svg";
import CloudMoonSvg from "../../icons/Cloud-Moon.svg";
import CloudSnowSvg from "../../icons/Cloud-Snow-Alt.svg";
import WindStatus from './WindStatus'; 
import './WeatherWidget.css'; 

type WeatherData = {
    weather: { description: string }[];
    main: { temp: number ,feels_like: number;humidity: number};
    sys: { sunrise: number; sunset: number };
    timezone: number;
    wind: { speed: number; deg: number };
};

type WeatherWidgetProps = {
    location: string;
    selectedButton: string;
};

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ location, selectedButton }) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [isDayTime, setIsDayTime] = useState<boolean>(true); 
    const [locationFound, setLocationFound] = useState<boolean>(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchWeatherData(location);
                setWeatherData(data);
                setLocationFound(true);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setLocationFound(false);
            }
        };

        fetchData();
    }, [location]);

    useEffect(() => {
        if (weatherData) {
            const currentTimeUTC = new Date().getTime() / 1000;
            const localTime = currentTimeUTC + weatherData.timezone;
            const isDay = localTime > weatherData.sys.sunrise && localTime < weatherData.sys.sunset;
            setIsDayTime(isDay);
        }
    }, [weatherData]);

    if (!locationFound) {
        return <div className='weather-widget-container'>Location not found.</div>;
    }

    if (!weatherData || !weatherData.sys) {
        return <div>Loading...</div>;
    }

    const formattedTemperature = Math.round(weatherData.main.temp);
    let selectedWeatherIcon: string;

    const weatherDescription = weatherData.weather[0].description.toLowerCase();

    if (weatherDescription.includes('cloud')) {
        selectedWeatherIcon = CloudMoonSvg; 
    } else if (weatherDescription.includes('rain')) {
        selectedWeatherIcon = CloudDrizzleSvg; 
    } else if (weatherDescription.includes('snow')) {
        selectedWeatherIcon = CloudSnowSvg; 
    } else {
        selectedWeatherIcon = isDayTime ? SunnySvg : MoonSvg; 
    }

    return (
        <div className='weather-widget-container'>
            <div className='weather-widget'>
                {selectedButton === 'general' && (
                    <div>
                        <div className='weather-icon'>
                            <img src={selectedWeatherIcon} alt={isDayTime ? 'Sun' : 'Moon'} />
                        </div>
                        
                        <div className='temperature'>Temperature: {formattedTemperature}&deg;C</div> 
                        <div className='weather'>Weather: {weatherData.weather[0].description}</div>
                        <div className='feels-like'>Feels Like: {Math.round(weatherData.main.feels_like)}&deg;C</div>
                        <div className='humidity'>Humidity: {weatherData.main.humidity}</div>
                        <div className='location'>Location: {location}</div>
                    </div>
                )}
                 {selectedButton === 'wind' && (
                    <div>
                        <WindStatus windData={weatherData.wind} />
                    </div>
                )}
            
            </div>
        </div>
    );
};

export default WeatherWidget;
