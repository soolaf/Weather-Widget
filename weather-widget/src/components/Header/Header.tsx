import React from 'react';

type HeaderProps = {
    inputValue: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className="header-container">
            <h1>Weather Widget</h1>
            <form onSubmit={props.onFormSubmit}>
                <input type="text" value={props.inputValue} onChange={props.onInputChange} />
                <button type="submit">Location</button>
            </form>
        </div>
    );
};

export default Header;
