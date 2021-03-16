import React, {useState} from 'react';
import Form from "./form";
import Weather from "./weather";
import '../css/style.css'

function App() {
    const [weather, setWeather] = useState({});
    const [city, setCity] =useState('');
    return (
        <div className='app'>
            <div className='weather-container'>
                <Form setWeather={setWeather} city={city} setCity={setCity}/>
                {Object.keys(weather).length === 0 ? <div>Тут отобразится погода</div> : <Weather weather={weather}/>}
            </div>
            <div className='section'>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>

                    <div>
                        <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <i className="fa fa-ravelry" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-tint" aria-hidden="true"></i>
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-umbrella" aria-hidden="true"></i>
                        <i className="fa fa-sun-o" aria-hidden="true"></i>
                        <i className="fa fa-safari" aria-hidden="true"></i>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
