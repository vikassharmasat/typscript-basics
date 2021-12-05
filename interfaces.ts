interface Reportable{
  summary():string; //passing function satisfication terminology 
}
const oldCivic = {
  name:'civic',
  year:2000,
  isBroken:false,
  summary():string{
    return `it's a summary`;
  }
};

const drink = {
  color:'brown',
  carbonated:true,
  sugar:40,
  summary():string{
    return `it's a summary of drink`;
  }
}

                              //Reportable interface satisfication
const printSummary = (item:Reportable):void => {
  console.log(`${item.summary}`);
}

printSummary(oldCivic);
printSummary(drink);