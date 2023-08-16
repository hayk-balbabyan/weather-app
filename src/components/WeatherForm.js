import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const WeatherForm = ({ onSearch }) => {
    const [city, setCity] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!city) {
            setError('Please enter a city name.');
            return;
        }

        setError('');
        onSearch(city);
        setCity('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="cityInput">
                <Form.Control
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button variant="primary" type="submit" className={'w-100 my-4'}>
                Search
            </Button>
        </Form>
    );
};

export default WeatherForm;
