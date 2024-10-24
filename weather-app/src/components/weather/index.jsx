import { useEffect, useState } from "react";

export default function Weather() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    async function fetchWeatherData(param) {
        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&appid=afcfa64ee247fb0aa3783ce87bf727b0`);
            const data = await response.json();

            if (response.ok) {
                setWeatherData(data);
            } else {
                console.log(data.message); // Handle errors like city not found
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    function handleSearch() {
        fetchWeatherData(search);
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    }

    function getTime(timestamp) {
        return new Date(timestamp * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }

    useEffect(() => {
        fetchWeatherData("kathmandu");
    }, []);

    return (
        <>
            <div className="search-container">
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter city" />
                <button onClick={handleSearch}>Search</button>
            </div>

            {loading ? <div>Loading...</div> :
                weatherData && (
                    <div className="weather-container">
                        <div className="city-name">
                            <h2>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
                        </div>
                        <div className="date">
                            <span>{getCurrentDate()}</span>
                        </div>

                        {/* Display Current Weather Info */}
                        <div className="current-weather">
                            <p>Temperature: {Math.round(weatherData?.main?.temp)}°C</p>
                            <p>Feels Like: {Math.round(weatherData?.main?.feels_like)}°C</p>
                            <p>Description: {weatherData?.weather[0]?.description}</p>
                        </div>

                        <div className="weather-details">
                            <div className="weather-info">
                                <p>Humidity: {weatherData?.main?.humidity}%</p>
                                <p>Pressure: {weatherData?.main?.pressure} hPa</p>
                                <p>Visibility: {weatherData?.visibility / 1000} km</p>
                                <p>Wind Speed: {weatherData?.wind?.speed} m/s</p>
                            </div>

                            {/* Sunrise and Sunset Info */}
                            <div className="sun-info">
                                <p>Sunrise: {getTime(weatherData?.sys?.sunrise)}</p>
                                <p>Sunset: {getTime(weatherData?.sys?.sunset)}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}
