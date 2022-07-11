function createSliderDiv(path) {
  let slider = document.createElement('div');
  slider.id = 'slider';
  slider.className = 'slider';
  let prevBtn = createBtn('show-prev-btn', 'disabled');
  slider.appendChild(prevBtn);
  let wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  let image = document.createElement('img');
  image.className = 'slide-img';
  image.setAttribute('alt', 'Can\'t find photo');
  image.setAttribute('src', `${path}`);
  wrapper.appendChild(image);
  slider.appendChild(wrapper);
  let nextBtn = createBtn('show-next-btn');
  slider.appendChild(nextBtn);
  return slider;
}

function createBtn(classNameBtn, isDisabled){
  let btn = document.createElement('div');
  btn.className = classNameBtn;
  btn.classList.add(isDisabled)
  let arrow = document.createElement('span');
  arrow.className = 'arrow';
  btn.appendChild(arrow);
  return btn;
}