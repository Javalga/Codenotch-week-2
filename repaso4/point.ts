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
}