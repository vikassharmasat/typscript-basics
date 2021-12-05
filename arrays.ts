const carMakers = ['toyota', 'ford', 'chevy'];
const dates = [new Date(),new Date()];

const carsByMake:(string | number)[][] = [
  ['f130'],
  ['corolla'],
  ['camaro'],
  [2]
];

//Help with inference when extracting values 
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values 
carMakers.push(100);

//Help with 'map'
carMakers.map((car:string):string =>{
  return car.toUpperCase();
});

//flexible types
const importantDates = [new Date(),'2030-10-10'];

importantDates.push(new Date());//typo inference is exist
importantDates.push('string value');// typo inference is exist
importantDates.push(100);// typo inference is not exist so
// is guessing it shouldn't be number
