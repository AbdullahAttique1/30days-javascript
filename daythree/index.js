// Task one
let a=12

if(a==0){
    console.log("number is zero");
}else if(a>0){
    console.log("number is positive");

}else{
    console.log("number is negative");
}

// Task two

const age=14;

if(age>=18){
    console.log("Person is eligible to vote");
}else{
    console.log("Person is not eligible to vote");
}


// task 3
const num1=56
const num2=58
const num3=57



// if(num1>num2 ){
//    if(num1>num3){
//     console.log("Larges is Number One");
// }
// }else if(num2>num3){
//     if(num2>num1){
//      console.log("Larges is Number Two");
//     }     
// }else if(num3>num1){
    
//     console.log("Larges is Number Three");
//  }
 

    
    if(num1 > num2 && num1 > num3){
        
    console.log("Greater is numer one");
    
}else if(num2 > num1 && num2 > num3){
    
    console.log("Greater is numer Two");
    
    
}else if(num3 > num1 && num3 > num2){
    
    
    console.log("Greater is numer Three");
    
}else if(num1 == num2 ) {
    
    
    if(num1>num3){
        console.log("Greater is numer one");
    }else{
        console.log("Greater is numer Three");
        
    }
    
    
}else if(num2 == num3 ) {
    
    
    if(num1>num3){
        console.log("Greater is numer one");
    }else{
        console.log("Greater is numer Three");
        
    }
    
    
}else if(num1 == num3 ) {
    
    
    if(num2>num3){
        console.log("Greater is numer Two");
    }else{
        console.log("Greater is numer Three");
        
    }
    
    
}else{
    console.log("Numers are equa");
}
