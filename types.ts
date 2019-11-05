let myString : string; // accept string only
let num :number; // accept number only
let bool:boolean; //acept boolean
let myany:any; // accept anything

/* arrays
let arr:number[]; //accept  array of numbers
let arrTwo:Array<string>; // another way to set array types
let arrThree:string[]; accept array of strings
*/
let mytuple:[string,number]


myString ='hello'+''+'world';
num=22;
bool=true;

myany='hello';

let myvoid:void=null; //void accepts null , undefined , and no other types
console.log(myString);