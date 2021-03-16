import React from 'react';
import axios from "axios";

const Form = ({setWeather, city, setCity}) => {
    const getWeather = (e) => {
        e.preventDefault();
        const API_KEY = '2477da4d744ab4935c209e60d359753f';
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(({data})=> setWeather(data))
            .catch(() => console.log('О нет введите город корректно'))
        setCity('')
    };
    const inputHandler = (e) => {
        setCity(e.target.value)
    };
    return (
        <form action="" onSubmit={getWeather}>
            <input type="text" placeholder='Введите город' onChange={inputHandler} value={city}/>
            <button type='submit'>
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
        </form>
    );
};


export default Form;