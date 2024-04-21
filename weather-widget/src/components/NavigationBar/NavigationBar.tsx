import React from 'react';
import { Link } from 'react-router-dom';
import "./NavigationBar.css";

type NavigationBarProps = {
    onClickButton: (option: string) => void;
};

const NavigationBar: React.FC<NavigationBarProps> = (props) => {
    const handleButtonClick = (option: string) => {
        props.onClickButton(option);
    };

    return (
        <nav className="navigation-bar">
            <ul className="navigation-list">
                <li className="navigation-item">
                    <Link to="/general" onClick={() => handleButtonClick('general')}>
                        General Weather
                    </Link>
                </li>
                <li className="navigation-item">
                    <Link to="/wind" onClick={() => handleButtonClick('wind')}>
                        Wind Status
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
