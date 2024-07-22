
// Task one
var namee="Abdullah"

var age=22

const result=`${namee} ,${age}`

console.log(result);
// task 2
let multistring=`Its a first line
--second line

--third line

its a final and last line of 

`

console.log(multistring);

//task 3

const aray=["a","b","c","d"]
const [first ,second]=aray


console.log(first,second);


// Task four


const bookobject={
    title:"Javascript",
    author:"Code with harry"

}



const title=bookobject.title
const author=bookobject.author

console.log(title,author,"Title with author");

// Task five


const firstarray=["A","B","C","D"]
const newarray=[...firstarray,["E","F","G"]]

console.log(newarray,"iys");

// TAsk 6

function add(...acpt) {


    let sum=0
for (let index = 0; index < acpt.length; index++) {
    const element = acpt[index];
sum += acpt[index]




    
    
    
}

return sum


}


const resultofadd=add(10,20,30)
console.log(resultofadd,"resof add");


// TAsk 7

function Product(take,sec) {

    sec=4    
    const resuultofpro=take*sec

    return resuultofpro
}

const productfun=Product(4)

console.log(productfun,"pro func");

// TAsk 8

let nameperson="Abdulllah"
let work="School"
let favnumber=12


const person={
    nameperson,
    work,
    favnumber,

    Itspun :function () {

    console.log(`Hey ${nameperson} you are doing ${work} and your ${favnumber} is good`);
}

}


console.log(person);

person.Itspun()


// TAsk 9

const firname = "firstname"
const secondname = "secondname"
const aged = "age"

const persontwo = {

    [firname]: "Harry",

    [secondname]: "Roar",
    [aged]: 25
};

console.log(persontwo);