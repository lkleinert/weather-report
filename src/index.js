'use strict';

const state = {
  temp: 75,
  tempColor: 'warm',
  landscape: 'body_warm',
  currentCity: 'Phoenix',
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
  console.log(state.currentCity);
  const newCityName = document.getElementById('enter-city-name');
  console.log(newCityName.value);
  state.currentCity = newCityName.value;
  console.log(state.currentCity);
  const defaultCity = document.getElementById('default-city');
  defaultCity.textContent = state.currentCity;
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

  const newCityName = document.getElementById('enter-city-name');
  newCityName.addEventListener('input', changeCity);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
