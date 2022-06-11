'use strict';

const state = {
  temp: 75,
  tempColor: 'warm',
  landscape: 'body_warm',
  City: 'Phoenix',
  sky: 'sunny',
};

const tempColor = () => {
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
  tempValue.textContent = `${state.temp}`;
  tempColor();
};

const decreaseTemp = () => {
  state.temp -= 1;
  const tempValue = document.getElementById('temp-value');
  tempValue.textContent = `${state.temp}`;
  tempColor();
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
  // console.log(state.currentSky);
  const newSky = document.getElementById('sky-options');
  // console.log(sky.value);
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

// const updateDogContainer = () => {
//   state.dogCount += 1;
//   addDogImg();
//   updateDogCountLabel();
// }

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
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
