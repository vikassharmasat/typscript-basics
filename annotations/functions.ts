//returning mix type
const add = (a:number,b:number) => {
  return a;
}

//returning number type only
const substract = (a:number,b:number):number => {
  return a;
}

//anonymous functions
const divide = function(a:number,b:number):number {
  return a;
}


//no return 
const logger = (message:string):void =>{
  console.log(message);
}

//throw error will be return never
const throwError = (message:string):never =>{
  throw new Error(message);
}

//Destructring with Annotations
interface validateType{
  date:Date,
  weather:string
}
const forecast = {
  date:new Date(),
  weather:'sunny',
};

const logWeather = ({date,weather}:validateType):void =>{
  console.log(date);
  console.log(weather);
};

logWeather(forecast);

// ============================== //