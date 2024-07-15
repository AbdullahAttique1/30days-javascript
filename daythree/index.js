// Task one
let a = 12

if (a == 0) {
    console.log("number is zero");
} else if (a > 0) {
    console.log("number is positive");

} else {
    console.log("number is negative");
}

// Task two

const age = 14;

if (age >= 18) {
    console.log("Person is eligible to vote");
} else {
    console.log("Person is not eligible to vote");
}



// task 3


const num1 = 60
const num2 = 60
const num3 = 60


if(num1 == num2 && num1 == num3){
    console.log("All numbers are eaual");
}else {

    
    
    if (num1 == num2) {
        if (num3 > num1) {
            console.log("Greater is Number Three(3)");
        } else {
            console.log("Number One and number two are equals and gratter");
        }
        
    } else if (num2 == num3) {
        if (num1 > num2) {
            console.log("Greater is Number One(1)");
        } else {
            console.log("Number Two and number Three are equals and gratter");
        }
    } else if (num1 == num3) {
        if (num3 > num1) {
            console.log("Greater is Number Three(3)");
        }else{
            console.log("Number One and number Three are equals and gratter");
        }
    }//main logic 
    
    
    else if(num1 > num2) {
        if(num1 > num3){
            console.log("Number one is grater");
        }else {
            console.log("Number three is grater");
        }
    } else if (num2 > num3){
        if(num2 > num1){
            console.log("Number Two is grater");
        }else {
            console.log("Number One is grater");
        }
    }else if(num3 > num1){
        if(num3 > num2){
            console.log("Number three is grater ");
        }
        else{
            
            console.log("Number Two is grater ");
        }
    } 
    
    
    
    
    
}
    
    
    
    
    
 