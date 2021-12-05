const drinkX = {
  color:'brown',
  carbonated:true,
  sugar:40
}

//type alias for tulip
type Drink = [string,boolean,number];

//this tuples always get data in validation sequence the array of 
//validation asking to put value on given sequence

const cokaCola:Drink = ['brown',true,40];
const pepsi:[string,boolean,number] = ['brown',true,40];

const carSpec: [number,number] = [220,22];
const carState = {horsePower:20,weight:333};
