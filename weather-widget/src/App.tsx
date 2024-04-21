import React, { useState } from 'react';
import NavigationBarButtons from './components/NavigationBarButtons/NavigationBarButtons';
import Header from './components/Header/Header';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';

const App: React.FC = () => {
    const [inputValue, setInputValue] = useState('Netherlands');
    const [location, setLocation] = useState('Netherlands');
    const [selectedButton, setSelectedButton] = useState('general');

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLocation(inputValue);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const onClickButton = (option: string) => {
      setSelectedButton(option);
    };

    return (
        <div className="App">
            <Header
                inputValue={inputValue}
                onInputChange={handleInputChange}
                onFormSubmit={handleFormSubmit}
            />
            <NavigationBarButtons onClickButton={onClickButton} />
            <WeatherWidget location={location} selectedButton={selectedButton} />
        </div>
    );
};

export default App;
