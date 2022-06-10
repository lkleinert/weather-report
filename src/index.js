'use strict';

const state = {
  temperature: 75,
  tempColor: 'black',
  landscape: "url('photos/spring.jpeg')",
};

const tempColor = () => {
  const tempValue = document.getElementById('temp-value');
  const body = document.getElementById('body');
  if (state.temperature >= 80) {
    state.tempColor = 'red';
    tempValue.style.color = state.tempColor;
    state.landscape = "url('photos/best_desert.jpeg')";
    body.style.backgroundImage = state.landscape;
  } else if (state.temperature >= 70 && state.temperature <= 79) {
    state.tempColor = 'orange';
    tempValue.style.color = state.tempColor;
    state.landscape = "url('photos/spring.jpeg')";
    body.style.backgroundImage = state.landscape;
  } else if (state.temperature >= 60 && state.temperature <= 69) {
    state.tempColor = 'yellow';
    tempValue.style.color = state.tempColor;
    state.landscape = "url('photos/fall_4.jpeg')";
    body.style.backgroundImage = state.landscape;
  } else if (state.temperature >= 50 && state.temperature <= 59) {
    state.tempColor = 'green';
    tempValue.style.color = state.tempColor;
    state.landscape = "url('photos/fall_3.jpeg')";
    body.style.backgroundImage = state.landscape;
  } else if (state.temperature <= 49) {
    state.tempColor = 'teal';
    tempValue.style.color = state.tempColor;
    state.landscape = "url('photos/colorado-snow.jpeg')";
    body.style.backgroundImage = state.landscape;
  }
};

const increaseTemperature = () => {
  state.temperature += 1;
  const tempValue = document.getElementById('temp-value');
  tempValue.textContent = `${state.temperature}`;
  tempColor();
};

const decreaseTemperature = () => {
  state.temperature -= 1;
  const tempValue = document.getElementById('temp-value');
  tempValue.textContent = `${state.temperature}`;
  tempColor();
};

// const updateDogContainer = () => {
//   state.dogCount += 1;
//   addDogImg();
//   updateDogCountLabel();
// }

const registerEventHandlers = (event) => {
  const upArrow = document.getElementById('up-arrow');
  upArrow.addEventListener('click', increaseTemperature);

  const downArrow = document.getElementById('down-arrow');
  downArrow.addEventListener('click', decreaseTemperature);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
