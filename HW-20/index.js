const root = document.querySelector('.root')

const setClass = (list, level, newClass) => {
  if(typeof level == 'number')level--
  let ulList = [...list.children];
  if(level == 'last') level = ulList.length-1
  console.log(level)
  ulList[level].classList.add(newClass);
  ulList[level].classList.add('animation');
};

setTimeout(() => {
  setClass(root, 1, 'first')
  setClass(root, 'last', 'last')
}, 2000)