import React from 'react';
import WindSvg from "../../icons/Wind.svg";
import './WindStatus.css'

type WindStatusProps = {
    windData: {
        speed: number;
        deg: number;
    };
};

const WindStatus: React.FC<WindStatusProps> = ({ windData }) => {
    return (
        <div className='wind-status'>
            <img src={WindSvg} alt="Wind Icon" className="wind-icon" />
            <p>Speed: {windData.speed} m/s</p>
            <p>Degree: {windData.deg}&deg;</p>
        </div>
    );
};

export default WindStatus;
