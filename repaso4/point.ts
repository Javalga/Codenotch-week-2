export class Point {
  constructor(private x: number, private y: number) {
    this.x = x;
    this.y = y;
  }
  public setX(value: number): void {
    this.x = value
  }
  public setY(value: number): void {
    this.y = value
  }
  public getX() {
    return this.x
  }
  public getY() {
    return this.y
  }
  public toString() {
    return `(${this.x},${this.y})`
  }
  public distanceToOrigin() {
    let distance = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    return distance
  }
  public calculateDistance(anotherPoint: Point): number {
    let distance = Math.round(Math.sqrt(Math.pow((this.x - anotherPoint.x), 2) + Math.pow((this.y - anotherPoint.y), 2)))
    return distance
  }
  public calculateCuadrant() {
    if (this.x === 0 || this.y === 0) {
      return 0
    } else if (this.x > 0 && this.y > 0) {
      return 1
    } else if (this.x < 0 && this.y > 0) {
      return 2
    } else if (this.x < 0 && this.y < 0) {
      return 3
    } else if (this.x > 0 && this.y < 0) {
      return 4
    }
  }
}