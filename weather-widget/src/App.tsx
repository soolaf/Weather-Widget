import React, { useState } from 'react';
import NavigationBarButtons from './components/NavigationBarButtons/NavigationBarButtons';
import Header from './components/Header/Header';

const App: React.FC = () => {
    const [inputValue, setInputValue] = useState('London');
    const [location, setLocation] = useState('London');
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
        </div>
    );
};

export default App;
