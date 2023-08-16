import React from 'react';
import { Card, Alert } from 'react-bootstrap';

const WeatherCard = ({ weather, searchStarted }) => {

    if ( !searchStarted ) {
        return <Alert variant="info">Search your city/country to see weather!</Alert>;
    }

    const errorMessage = <Alert variant="danger">Weather data is unavailable! Try again later.</Alert>;

    if (!weather) {
        return errorMessage;
    }

    const { name, main, weather: weatherDetails } = weather;

    if ((!main || !weatherDetails) && searchStarted) {
        return errorMessage;
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Weather in {name}</Card.Title>
                <Card.Text>Temperature: {main.temp}°C</Card.Text>
                <Card.Text>Weather: {weatherDetails[0].description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default WeatherCard;
