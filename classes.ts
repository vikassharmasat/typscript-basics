class Vehicle {
  public name: string; //can be accessed everywhere
  private price: number; //can be accessed inside same class only not outside
  protected modelN: number; // can be accessed only child class not outside

  constructor(public color:string){
    this.color = color;
  }
  honk(): void {
    console.log(`beep`);
  }
}

class Car extends Vehicle {
  constructor(public wheels:number,color:string){
    super(color);
  }
  private drive(): void {
    console.log(`vroom`);
  }

  startDrivingProccess(): void {
    this.drive();
  }
}

const vehicle = new Vehicle('red');
vehicle.honk();
console.log(vehicle.color);
const car = new Car(4,'black');
car.startDrivingProccess();
