const sliderContainers = document.querySelectorAll('.slider-container');
const sliders = [];

const min = 0;
const max = 100

sliderContainers.forEach(container => {
  const track = container.querySelector('.slider-track');
  const thumb = container.querySelector('.slider-thumb');
  const value = container.nextElementSibling;

  let isDragging = false;
  let currentValue = 0;

  thumb.addEventListener('mousedown', () => {
    isDragging = true;
    thumb.classList.add('active');
  });

  document.addEventListener('mousemove', event => {
    if (!isDragging) {
      return;
    }

    const position = getPosition(event.clientX, container);
    currentValue = Math.round((max - min) * position + min);

    if (currentValue < min) {
      currentValue = min;
    } else if (currentValue > max) {
      currentValue = max;
    }

    updateSlider(track, thumb, currentValue);
    value.innerText = currentValue;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    thumb.classList.remove('active');
  });

  sliders.push({ track, thumb, value });
});

function getPosition(clientX, container) {
  const { left, width } = container.getBoundingClientRect();
  const position = (clientX - left) / width;
  return position;
}

function updateSlider(track, thumb, value) {
  const position = (value - min) / (max - min);
  const thumbPosition = position * track.offsetWidth;
  thumb.style.left = `${thumbPosition}px`;
}



const slider = document.querySelector('.slider');
const range = slider.querySelector('.slider__range');
const value = slider.querySelector('.slider__value');
const thumb = slider.querySelector('.slider__thumb');
const divisor = slider.querySelector('.slider__divisor');
const track = slider.querySelector('.slider__track');
const tickContainer = slider.querySelector('.slider__tick-container');

const TICK_COUNT = 10;

function updateValue() {
  value.textContent = range.value;
}

function updateThumbPosition() {
  const percent = (range.valueAsNumber - range.min) / (range.max - range.min);
  const thumbPos = percent * (slider.offsetWidth - 40) + 20;
  thumb.style.left = `${thumbPos}px`;

  const divisorPos = percent * (slider.offsetWidth - 2);
  divisor.style.left = `${divisorPos}px`;
}

function createTicks() {
  const tickWidth = (slider.offsetWidth - 16) / (TICK_COUNT - 1);
  for (let i = 0; i < TICK_COUNT; i++) {
    const tick = document.createElement('div');
    tick.classList.add('slider__tick');
    tick.style.left = `${i * tickWidth}px`;
    tickContainer.appendChild(tick);
  }
}

range.addEventListener('input', () => {
  updateValue();
  updateThumbPosition();
});

thumb.addEventListener('mousedown', () => {
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(event) {
  const sliderRect = slider.getBoundingClientRect();
  let position = (event.clientX - sliderRect.left) / slider.offsetWidth;
  if (position < 0) {
    position = 0;
  }
  if (position > 1) {
    position = 1;
  }
  const value = range.min + position * (range.max - range.min);
  range.value = value;
  updateValue();
  updateThumbPosition();
}

function onMouseUp() {
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}

createTicks();
updateValue();
updateThumbPosition();
