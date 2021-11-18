'use strict'

class customHTML{
  constructor(tagName, obj) {
    this.div = document.createElement(tagName);
    this.div.setAttribute(obj.attributeName, obj.attributeValue);
    this.div.classList.add(obj.className);
    this.div.innerText = obj.elementText;
  }
  render(selector){
    this.element = document.querySelector(selector);
    this.element.appendChild(this.div);
  }
}

const myElement = new customHTML('div', {attributeName: 'id',attributeValue : 'wrapper', className: 'wrapperClass', elementText: 'Bla-Bla-Bla'});
myElement.render('.element');

const myElement2 = new customHTML('button', {attributeName: 'id', attributeValue : 'someButton', className: 'button', elementText: 'this is button'});
myElement2.render('.element');