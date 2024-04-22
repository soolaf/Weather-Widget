
#Weather Widget  Documentation

Overview
The Weather Widget App is a simple web application that allows users to check the weather for a specific location. It retrieves weather data from the OpenWeatherMap API and displays it to the user.

Features
View current weather conditions for a specified location.
Display temperature, weather description, and wind status.
Toggle between general weather information and wind status.
Technologies Used
React: JavaScript library for building user interfaces.
TypeScript: Superset of JavaScript that adds static typing to the language.
Axios: Promise-based HTTP client for making API requests.
CSS: Styling language used for styling the application.
OpenWeatherMap API: Provides weather data for locations around the world.
Components

The Weather App consists of the following components:

Header: Displays the title of the application and allows users to input a location to check the weather.
NavigationBar: Provides navigation options for switching between general weather information and wind status.
NavigationBarButtons:Provides navigation buttons for switching between general weather information and wind status
WeatherWidget:responsible for fetching weather data from the OpenWeatherMap API and displaying it to the user.
WindStatus: responsible for  displaying the wind status data to the user.

Service Component
This component is responsible for fetching weather data from the OpenWeatherMap API. It abstracts away the API interaction details and facilitates seamless data retrieval for the application.
Installation


To run the Weather App locally, follow these steps:

Clone the repository from GitHub.
Navigate to the project directory in your terminal.
Install dependencies by running npm install.
Start the development server by running npm start.
Open your web browser and navigate to http://localhost:3000 to view the app.
Usage
Enter the name of the location you want to check the weather for in the input field.
Click the "Update Location" button to fetch and display the weather data.
Use the navigation buttons to toggle between general weather information and wind status.
Future Improvements
Add support for fetching and displaying additional weather information (e.g.,  pressure).
Implement better error handling for API requests.
Improve responsiveness for different screen sizes.
Add unit tests to ensure the reliability of the application.
