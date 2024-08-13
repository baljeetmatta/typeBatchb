//console.log("Hello");
//int a
//a=10;
//int a=10
// let a:number;
// a=10

// let b:number=10;
// let message:string;
// let a;
// a=10;
// a="test";
// let data:number|string;
// data=10;
// data="Code";
//(int)
//let data:any;
//data="CodeQuotient";
//let stringdata=(data as string)
// const GREEN:number=0;
// const RED:number=1;
// const BLUE:number=2

// enum Color{GREEN,RED,BLUE};
// let mycolor:Color;
// mycolor=Color.RED;
// console.log(mycolor);
// let arr:(number)[]=[12,23,4];
// arr.forEach((item)=>{
// item.    

// }

//a="test";
let sum=(x:number,y?:number):number=>{
    if(y==undefined)
    {
        console.log("Not passed");
        y=x;
    }
    return x+y;

  //  console.log("sum called",x+y);
}
sum(2);

