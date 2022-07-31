class FigureFabric {
  constructor() {
    this.id = +new Date()
  }

  setShape(shape) {
    this.shape = shape;
  }

  setColor(color) {
    this.color = color;
  }

  renderShape() {
    if (this.color && this.shape) {
      let figure = document.getElementById(`${this.id}`);
      figure.style = '';
      figure.style.width = `${this.shape.width}px`;
      figure.style.height = `${this.shape.height}px`;
      figure.style.backgroundColor = this.color;
      if (this.shape.shape == 'circle') figure.style.borderRadius = '50%';
    }
  }

  createFabric() {
    const fabric = document.createElement('div');
    const shape = document.createElement('div');
    shape.setAttribute('id', this.id);
    const ShapeSelector = document.createElement('select');
    ShapeSelector.innerHTML = `<option value="" selected disabled hidden>Choose here</option>`;
    const selectCircle = document.createElement('option');
    selectCircle.dataset.data = JSON.stringify({ shape: 'circle', width: 200, height: 200 });
    selectCircle.innerText = 'circle';
    const selectSquare = document.createElement('option');
    selectSquare.dataset.data = JSON.stringify({ shape: 'square', width: 200, height: 200 });
    selectSquare.innerText = 'square';
    const selectRectangle = document.createElement('option');
    selectRectangle.dataset.data = JSON.stringify({ shape: 'rectangle', width: 200, height: 150 });
    selectRectangle.innerText = 'rectangle';
    ShapeSelector.append(selectCircle);
    ShapeSelector.append(selectSquare);
    ShapeSelector.append(selectRectangle);
    ShapeSelector.addEventListener('change', e => {
      let selectedIndex = e.target.selectedIndex
      this.setShape(JSON.parse(e.target[selectedIndex].dataset.data))
      console.log(JSON.parse(e.target[selectedIndex].dataset.data))
      this.renderShape()
    });
    const colorInput = document.createElement('input');
    colorInput.setAttribute('type', 'color');
    colorInput.addEventListener('change', () => {
      this.color = colorInput.value
      this.renderShape()
    });
    fabric.append(shape)
    fabric.append(ShapeSelector)
    fabric.append(colorInput)
    return fabric
  };

  renderFabric(el) {
    el.append(this.createFabric())
  }
}

let fabric = new FigureFabric()
fabric.renderFabric(document.body)