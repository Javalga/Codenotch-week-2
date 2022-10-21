export class Vector {
  private elements: number[]
  constructor(n: number, k: number) {
    this.elements = [];
    for (let i = 0; i < n; i++) {
      this.elements.push(Math.round(Math.random() * k))
    }
  }
  public print() {
    console.log(this.elements)
  }
  public add(v1: Vector): Vector {
    let addedVector = new Vector(this.elements.length, 0)
    if (v1.elements.length === this.elements.length) {
      for (let i = 0; i < this.elements.length; i++) {
        addedVector.elements[i] = (v1.elements[i] + this.elements[i])
      }
    } else {
      console.log('Both vectors must have the same length');
    }
    return addedVector
  }
  public subs(v1: Vector): Vector {
    let substractedVector = new Vector(this.elements.length, 0)
    if (v1.elements.length === this.elements.length) {
      for (let i = 0; i < this.elements.length; i++) {
        substractedVector.elements[i] = (v1.elements[i] - this.elements[i])
      }
    } else {
      console.log('Both vectors must have the same length');
    }
    return substractedVector
  }

  public mult(v1: Vector): Vector {
    let multipliedVector = new Vector(this.elements.length, 0)
    if (v1.elements.length === this.elements.length) {
      for (let i = 0; i < this.elements.length; i++) {
        multipliedVector.elements[i] = (v1.elements[i] * this.elements[i])
      }
    } else {
      console.log('Both vectors must have the same length');
    }
    return multipliedVector
  }

  public multNumber(n: number): Vector {
    let multipliedVector = new Vector(this.elements.length, 0)
    for (let i = 0; i < this.elements.length; i++) {
      multipliedVector.elements[i] = (this.elements[i] * n)
    }
    return multipliedVector
  }
}

