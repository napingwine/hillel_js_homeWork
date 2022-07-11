let textField = createInput('task1', 'type', 'text');
document.body.appendChild(textField);

textField.addEventListener('focus', ()=>{
  let info = createDiv('focus','in focus');
  document.body.appendChild(info);
  let el = document.querySelector('#blur');
  if(el){
    el.remove();
  }
})

textField.addEventListener('blur', ()=>{
  // let info = createDiv('blur','focus was lost');
  // document.body.appendChild(info);
  let el = document.querySelector('#focus');
  if(el){
    el.remove();
  }
})