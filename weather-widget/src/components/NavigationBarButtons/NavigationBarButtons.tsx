import React from 'react';
import './NavigationBarButtons.css';  

type NavigationBarButtonsProps = {
    onClickButton: (option: string) => void;
};

const NavigationBarButtons: React.FC<NavigationBarButtonsProps> = (props) => {
    const handleClickButton = (option: string) => {
        props.onClickButton(option);
    };

    return (
        <div className="navigation-buttons">
            <button className="navigation-button" onClick={() => handleClickButton('general')}>
                General Weather
            </button>
            <button className="navigation-button" onClick={() => handleClickButton('wind')}>
                Wind Status
            </button>
        </div>
    );
};

export default NavigationBarButtons;
