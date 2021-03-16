import React from 'react';

const Weather = ({weather}) => {
    const getYear = () => {
      const unixYearStamp = weather.dt * 1000
      const date = new Date(unixYearStamp)
      const year = date.getFullYear()
      const month = date.getMonth()
      const date1 = date.getDate()
      return `${date1}.${month}.${year}`
    };
    const getTime = () => {
        const unixTimeStamp = weather.dt * 1000
        const date = new Date(unixTimeStamp)
        const hours = date.getHours()
        const minutes = date.getMinutes()
        return `${hours}:${minutes}`
    };
    const getSunrise = () => {
        const unixTimeStamp = weather.sys.sunrise * 1000
        const date = new Date(unixTimeStamp)
        const hours = date.getHours()
        const minutes = date.getMinutes()
        return `${hours}:${minutes}`
    };
    const getSunset = () => {
        const unixTimeStamp = weather.sys.sunset * 1000
        const date = new Date(unixTimeStamp)
        const hours = date.getHours()
        const minutes = date.getMinutes()
        return `${hours}:${minutes}`
    };
    return (
        <div>
            <p className="time">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                {getTime()}</p>
            <p className="time">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                {getYear()}</p>
            <p>{weather.name} "{weather.sys.country}"</p>
            <p>
                <i className="fa fa-thermometer-three-quarters" aria-hidden="true"></i>
                {(weather.main.temp - 273.15).toFixed(2)} °C <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt=""/></p>
            <p>
                <i className="fa fa-ravelry" id="wind" aria-hidden="true"></i>
                {weather.wind.speed} м/с</p>
            <p>
                <i className="fa fa-sun-o" id="sun" aria-hidden="true"></i>
                {getSunrise()}</p>
            <p>
                <i className="fa fa-moon-o" id="moon" aria-hidden="true"></i>
                {getSunset()}</p>
        </div>
    );
};
export default Weather;
