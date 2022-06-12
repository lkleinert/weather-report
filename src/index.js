'use strict';

// const axios = 'axios';

const state = {
  temp: 75,
  tempColor: 'warm',
  landscape: 'body_warm',
  City: 'Phoenix',
  sky: 'sunny',
  lat: 33.4484367,
  lon: -112.0741417,
};

const getWeather = () => {
  axios
    .get('http://127.0.0.1:5000/weather', {
      params: { lat: state.lat, lon: state.lon },
    })
    .then((response) => {
      const data = console.log(response.data.current);
      const temp_k = response.data.current.temp;
      const temp_f = Math.round(((temp_k - 273.15) * 9) / 5 + 32);
      state.temp = temp_f;
      const tempValue = document.getElementById('temp-value');
      tempValue.textContent = state.temp;
      tempColorLandscape();
    })
    .catch((error) => {
      console.log(error);
    });
};

const getLatLon = () => {
  axios
    .get('http://127.0.0.1:5000/location', { params: { q: state.City } })
    .then((response) => {
      console.log(state.lat);
      state.lat = response.data[0].lat;
      console.log(state.lat);
      console.log(state.lon);
      state.lon = response.data[0].lon;
      console.log(state.lon);
      getWeather();
    })
    .catch((error) => {
      console.log(error);
    });
};

//ROSALIND
// function get(url) {
//   const promise = new Promise();
//   XMLHttpRequest({
//     url,
//     onFinish: (result) => {
//       promise.resolve(result);
//     },
//     onError: (error) => {
//       promise.error(error);
//     },
//   });
//   return promise;
// }

const tempColorLandscape = () => {
  const tempValue = document.getElementById('temp-value');
  const body = document.getElementById('body');
  if (state.temp >= 80) {
    state.tempColor = 'hot';
    tempValue.className = state.tempColor;
    state.landscape = 'body_hot';
    body.className = state.landscape;
  } else if (state.temp >= 70 && state.temp <= 79) {
    state.tempColor = 'warm';
    tempValue.className = state.tempColor;
    state.landscape = 'body_warm';
    body.className = state.landscape;
  } else if (state.temp >= 60 && state.temp <= 69) {
    state.tempColor = 'cool';
    tempValue.className = state.tempColor;
    state.landscape = 'body_cool';
    body.className = state.landscape;
  } else if (state.temp >= 50 && state.temp <= 59) {
    state.tempColor = 'chilly';
    tempValue.className = state.tempColor;
    state.landscape = 'body_chilly';
    body.className = state.landscape;
  } else if (state.temp <= 49) {
    state.tempColor = 'cold';
    tempValue.className = state.tempColor;
    state.landscape = 'body_cold';
    body.className = state.landscape;
  }
};

const increaseTemp = () => {
  state.temp += 1;
  const tempValue = document.getElementById('temp-value');
  tempValue.textContent = state.temp;
  tempColorLandscape();
};

const decreaseTemp = () => {
  state.temp -= 1;
  const tempValue = document.getElementById('temp-value');
  tempValue.textContent = state.temp;
  tempColorLandscape();
};

const changeCity = () => {
  const cityName = document.getElementById('enter-city-name');
  const displayedCity = document.getElementById('default-city');
  state.City = cityName.value;
  displayedCity.textContent = state.City;
};

const resetCity = () => {
  const cityName = document.getElementById('enter-city-name');
  state.City = 'Phoenix';
  cityName.value = 'Phoenix';
  changeCity();
};

const changeSky = () => {
  const newSky = document.getElementById('sky-options');
  state.sky = newSky.value;
  const skyImage = document.getElementById('sky-image-container');
  if (state.sky === 'sunny') {
    skyImage.className = 'sunny';
  } else if (state.sky === 'cloudy') {
    skyImage.className = 'cloudy';
  } else if (state.sky === 'rainy') {
    skyImage.className = 'rainy';
  } else if (state.sky === 'snowy') {
    skyImage.className = 'snowy';
  }
};

const registerEventHandlers = (event) => {
  const upArrow = document.getElementById('up-arrow');
  upArrow.addEventListener('click', increaseTemp);

  const downArrow = document.getElementById('down-arrow');
  downArrow.addEventListener('click', decreaseTemp);

  const CityName = document.getElementById('enter-city-name');
  CityName.addEventListener('input', changeCity);

  const resetButton = document.getElementById('reset-city');
  resetButton.addEventListener('click', resetCity);

  const newSky = document.getElementById('sky-options');
  newSky.addEventListener('change', changeSky);

  const realTimeButton = document.getElementById('real-time-button');
  realTimeButton.addEventListener('click', getLatLon);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
