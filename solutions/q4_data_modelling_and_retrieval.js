// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const fruitsArray=[
    {name:'Banana',color:'Yellow',pricePerKg:60},
    {name:'Apple',color:'Red',pricePerKg:150},
    {name:'Grapes',color:'Green',pricePerKg:80},
    {name:'Orange',color:'Orange',pricePerKg:60},
];
const convertToObj=(fruitArray,keyField)=>
fruitArray.reduce((object,item) => {
    object[item[keyField]]=item;
    return object;
}, {});
const fruitObj=convertToObj(fruitsArray,'name');
console.log(fruitObj);
console.log(fruitObj.Banana);
console.log(fruitObj.Grapes);

