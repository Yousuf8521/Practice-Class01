//console.log("Hellow World");
//console.log("Muhammad Yousuf"

import { log } from "console"



//====================== Variables in TypeScript ============================


//var firstname : string = "Muhammad Yousuf"

//console.log(firstname);



//var firstname : string;

//console.log(firstname)   //Undefine


//var firstName = "Muhammad Yousuf"

//console.log(firstName);    //  Assigned value



//var firstName

//console.log(firstName);    //  Undefine value



// ***Example: Variables in TypeScript

//var uname = "Muhammad Yousuf"
//var ulocation : String = "Karachi"
//var mobileNumber : String = "0336-8440512"
//var marks = 500
//var percentage = 80


//console.log("name:" , uname)
//console.log("location:" , ulocation)
//console.log("mobileNumber:" , mobileNumber)
//console.log("marks:" , marks)
//console.log("percentage:" , percentage)


// ****Example: Type Assertion in TypeScript

//var string= "5"
//var string2 : number = <number> <any> string

//console.log(typeof(string2));


//var yousuf="5"
//var yousuf2 : number = <number> <any> yousuf

//console.log(typeof(yousuf2))


//****** Example: Inferred Typing

//var num = 5
//console.log("value of num", + num);
//num = 12
//console.log(num);


//var num = 13031993
//console.log("value of num", + num);
//num = 13
//console.log(num);



//============================ Variable decleration ==================================

//var fname = "Yousuf"

//let userName = " Yousuf"

//const PI:number = "1.333331"



// ======================== Type Annotation ========================

//let age : number = 25
//let isstudent : boolean = true


//================ Type Inference ======================

//let country = "Pakistan"


//================= Using Any Type ======================

//let data : any = 400

//data = "four hundred"

//data = true


//========== Block Level Scoping ==================

//if (true) {
    //let blockscopevar = "i m blcok scope"
    //console.log(blockscopevar);
//}


//if (true) {
    //var blockscopevar = "i m blcok scope"   
//}
//console.log(blockscopevar);


// ============ No Hoisting With Let ====================

//console.log(firstName);
//let firstName = "Muhammad Yousuf"