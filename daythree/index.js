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


if (num1 == num2 && num1 == num3) {
    console.log("All numbers are eaual");
} else {



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
        } else {
            console.log("Number One and number Three are equals and gratter");
        }
    }//main logic 


    else if (num1 > num2) {
        if (num1 > num3) {
            console.log("Number one is grater");
        } else {
            console.log("Number three is grater");
        }
    } else if (num2 > num3) {
        if (num2 > num1) {
            console.log("Number Two is grater");
        } else {
            console.log("Number One is grater");
        }
    } else if (num3 > num1) {
        if (num3 > num2) {
            console.log("Number three is grater ");
        }
        else {

            console.log("Number Two is grater ");
        }
    }





}



//  task 4



let day = 7

switch (day) {
    case (1): (console.log("Monday"))
        break;

    case (2): console.log("Tuesday");
        break;

    case (3): (console.log("WednesDay"))
        break;

    case (4): console.log("ThursDay");
        break;


    case (5): console.log("Friday");
        break;

    case (6): (console.log("SaturDay"))
        break;

    case (7): console.log("Sunday");
        break;


}

//  task 5


let grade = 96
switch (true) {
    case grade >= 90:
        console.log("A")
        break;
    case grade >= 80:
        console.log("B")
        break;
    case grade >= 60:
        console.log("C")
        break;
    case grade >= 40:
        console.log("D")
        break;
    case grade < 40:
        console.log("Fail")
        break;
}
// task 6

let number = 52
const evennumber = (number % 2 == 0)

evennumber ? console.log("Its a evennumber") : console.log("Its not a evenNumber");

// Task 7
// Chek year is leep year


const year = 2020

if (year % 4 ==0) {

    if (year % 100 !==0 || year % 400 ==0 ) {

        console.log("Its  a leep year");
    }else{
        console.log("Its not a leep year");
    }

}

else {
    console.log("This is not leep year Last else");
}