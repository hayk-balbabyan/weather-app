import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WeatherForm from './components/WeatherForm';
import WeatherCard from './components/WeatherCard';

const API_KEY = 'API_KEY_HERE'; // Replace with your API key

function App() {
    const [weather, setWeather] = useState(null);
    const [searchStarted, setSearchStarted] = useState(false);

    const searchWeather = async (city) => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeather(data);
        setSearchStarted(true);
    };

    return (
        <Container className="App">
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <h1 className="mt-4 text-center">Weather App</h1>
                    <WeatherForm onSearch={searchWeather} />
                    <WeatherCard weather={weather} searchStarted={searchStarted}/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
