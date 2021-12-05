const profile = {
  Username:'alex',
  age:20,
  coords:{
    lat:0,
    lng:3
  },
  setAge(age:number):void{
    this.age = age;
  }
};

const {age,Username}:{age:number,Username:string} = profile;
const {coords:{lat,lng}}:{coords:{lat:number,lng:number}} = profile;
