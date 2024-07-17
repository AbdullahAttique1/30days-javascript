// Task 1
function evenorodd(num) {
        if(num % 2 ==0){
            console.log("Its a Even Number");
        }else{
            
            console.log("Its a Odd Number");
        }
}



evenorodd(53)


//TAsk 2

function SquareNumber(num){
    const square=num * num
    console.log(square);
return square
}
SquareNumber(5)

//Task 3

const maxteonum=function (num1,num2) {

if(num1 > num2){
    console.log("Num1 is grater",num1);
}else{
    console.log("Num2 is grater",num2);

}

    console.log(num1,num2);
    
}
maxteonum(25,26)


// Task 4
const concatetosting=function(str1,str2){

    let result = str1.concat(str2)

    

    return result
    

}

const resconcarstrin=concatetosting("ABd","Ullah")
console.log(resconcarstrin);

// Task 5

const sumoftwo=(sum1,sum2) => {

    let result=sum1+sum2
    console.log(result);
    return result
}
sumoftwo(56,58)

// Task 6

const checkconstr=(str) => {

let check=str.includes("a")


 return check

 }

 const checkvalue=checkconstr("Sardar")
 console.log(checkvalue);

 // Task 7

 const sumoftwopara=(sum1,sum2) => {

    sum2=56
    let result=sum1+sum2
  
    return result
}
const ressumoft=sumoftwopara(56,)
console.log(ressumoft);

// Task 8

const person=(name,age) => {
    age=26
const message=`Hello! Welcome ${name} to my page. I hope ${name} find what you're looking for and enjoy your visit. Have a great day`     

return message;

}
const ressperson=person("Abdullah")
console.log(ressperson);

// Task 9



function HigherOrder(Hello,number){
    for(let t=1; t<=number; t++){
        Hello()
    }
  
}


function Hello(){
    console.log("Hellow worlkd");
}

HigherOrder(Hello ,5)



// Task 9

function HigherOrdersec(firstfun,secfun,val){



 const firstres= firstfun(val)

const secondresult=secfun(firstres)
   
return secondresult
   

}

function firstfun(val){
    console.log(val);

    return val *2
}

function secondfunction(firstres){

    return firstres *5
 
}

const myres=HigherOrdersec(firstfun,secondfunction,8)

console.log(myres);


