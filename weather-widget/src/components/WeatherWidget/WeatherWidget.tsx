import React, { useEffect, useState } from 'react';
import { fetchWeatherData } from '../../services/weatherService';
import MoonSvg from "../../icons/Moon.svg";
import CloudMoon from "../../icons/Cloud-Moon.svg";
import SunnySvg from "../../icons/Sun.svg";
import CloudDrizzleSvg from "../../icons/Cloud-Drizzle.svg";
import CloudFogSvg from "../../icons/Cloud-Fog.svg";
import CloudHailSvg from "../../icons/Cloud-Hail.svg";
import CloudMoonSvg from "../../icons/Cloud-Moon.svg";
import CloudSnowSvg from "../../icons/Cloud-Snow-Alt.svg";
import WindSvg from "../../icons/Wind.svg";
import CloudSunSvg from "../../icons/Cloud-Sun.svg";
import './WeatherWidget.css'; 

type WeatherData = {
    weather: { description: string }[];
    main: { temp: number };
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchWeatherData(location);
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, [location]);

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const currentTimeUTC = new Date().getTime() / 1000;
    const localTime = currentTimeUTC + weatherData.timezone;
    const isDayTime = localTime > weatherData.sys.sunrise && localTime < weatherData.sys.sunset;

    const weatherIconMap: { [key: string]: string } = {
        'clear sky': SunnySvg,
        'few clouds': CloudMoon,
        'broken clouds': CloudMoon
    };

    const selectedWeatherIcon = weatherIconMap[weatherData.weather[0].description.toLowerCase()];

    return (
        <div className='weather-widget-container'>
            <div className='weather-widget'>
                {selectedButton === 'general' && (
                    <div>
                        <div className='weather-icon'>
                            <img src={isDayTime ? SunnySvg : MoonSvg} alt={isDayTime ? 'Sun' : 'Moon'} />
                        </div>
                        <div className='weather-icon'>
                            <img src={selectedWeatherIcon} alt="Weather Icon" />
                        </div>
                        <div className='temperature'>Temperature: {weatherData.main.temp}</div>
                        <div className='weather'>Weather: {weatherData.weather[0].description}</div>
                        <div className='location'>Location: {location}</div>
                    </div>
                )}
            
            </div>
        </div>
    );
};

export default WeatherWidget;
