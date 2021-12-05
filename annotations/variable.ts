// ======================= Type Annotations ========================== //
let apples:number,speed:string,hasName:boolean,nothingMuch:null,nothing:undefined,now:Date;

apples = 3;
speed = 'fast';
hasName = true;
nothingMuch = null ;
nothing = undefined;
now = new Date();

//Array 
let colors : string[] = ['red','blue','black','2'];
let myNumbers:number[] = [1,32,4];
let truths:boolean[] = [true];

//classes
class Car {
  name:string;
  roll:number;
  isPassed:boolean;
}

let car: Car = new Car();

//object literal
let user:Car= {name:"vikas",roll:23,isPassed:false};
 
//Function Annotations tell function what should be take and what type of
const logNumber:(i:number,x:string) => void = (i:number,x:string) => {
  console.log(x);
}

// ==== when to use annotations
interface typecheck{
  x:number;
  y:number;
}
  // 1) Functions that returns the 'any' type
  const json = '{"x":10, "y":20}"';
  const coordinates:typecheck = JSON.parse(json);
  console.log(coordinates.y);// {x:10,y:20}

  // 2) When we declare a variable on one line
  // and initializate it later
  let words = ['red','green','blue'];
  let foundWord = false;
  for(let i = 0; i<words.length; i++){
      if(words[i] == 'green'){
        foundWord = true; 
      }
  }

  // 3) variable whose type can not be inferred correctly
  let numbers = [-10,-2,12];
  let numberAboveZero:boolean|number = false; //either it could be number or boolean
  for(let i =0; i<numbers.length; i++){
    if (numbers[i] > 0) {
      numberAboveZero = numbers[i];
    }
  }

// ============================================================== //