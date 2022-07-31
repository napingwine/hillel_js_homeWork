const root = document.querySelector('.root')

const setClass = (list, level, newClass) => {
  level--
  let ulList = [...list.children];
  ulList[level].classList.add(newClass);
  ulList[level].classList.add('animation');
};

setTimeout(() => {
  setClass(root, 1, 'first')
  setClass(root, 3, 'last')
}, 2000)