import React from 'react';
import { render, screen } from '@testing-library/react';
import WindStatus from '../WeatherWidget/WindStatus';

describe('WindStatus', () => {
  test('renders wind status correctly', () => {
    // Mock wind data
    const windData = {
      speed: 10,
      deg: 180,
    };

    render(<WindStatus windData={windData} />);


    expect(screen.getByText('Speed: 10 m/s')).toBeInTheDocument();
    expect(screen.getByText('Degree: 180°')).toBeInTheDocument();

    
    const windIcon = screen.getByAltText('Wind Icon');
    expect(windIcon).toBeInTheDocument();
    expect(windIcon.tagName).toBe('IMG'); 
  });
});
