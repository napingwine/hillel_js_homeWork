let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
let folder = './pic/';
let currentPictureId = 0;
let path = folder + images[currentPictureId];
let slider = createSliderDiv(path);
document.body.appendChild(slider);

let prevBtn = document.querySelector('.show-prev-btn');
let nextBtn = document.querySelector('.show-next-btn');
let sliderImg = document.querySelector('.slide-img');

prevBtn.addEventListener('click', () => {
  currentPictureId--;
  sliderImg.src = folder + images[currentPictureId];
  if(nextBtn.classList.contains('disabled')){
    nextBtn.classList.remove('disabled');
  }
  if (currentPictureId === 0) {
    prevBtn.classList.add('disabled');
  }
})

nextBtn.addEventListener('click', ()=>{
  currentPictureId++;
  sliderImg.src = folder + images[currentPictureId];
  if(prevBtn.classList.contains('disabled')){
    prevBtn.classList.remove('disabled');
  }
  if (currentPictureId === images.length - 1) {
    nextBtn.classList.add('disabled');
  }
})