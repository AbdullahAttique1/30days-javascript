console.log("Lest begain");

//Tak one
const arrayfirst=[1,2,3,4,5]





console.log(arrayfirst);
// Task two

console.log(arrayfirst[0],arrayfirst[arrayfirst.length-1]);

// Task three

arrayfirst.push(82)

console.log(arrayfirst);


// Task Four

arrayfirst.pop(arrayfirst[arrayfirst.length-1])
console.log(arrayfirst);

//task 5


arrayfirst.shift()
console.log(arrayfirst,"shift");

//Task 6

arrayfirst.unshift(1)

console.log(arrayfirst);

//Task 7

const newarr=arrayfirst.map((newarrarg)=>{
 const newaray=   newarrarg*2
   
    return newaray

})

console.log(newarr);

// Task 8

const filterarrat=arrayfirst.filter((filter)=>{
if(filter %2==0){
// console.log("Filter",filter);
return filter
}

})


console.log(filterarrat,"Filter");

// Task 9

const reducearrayh=[1,2,3,4,5]


const reducearray=reducearrayh.reduce((add,check)=>add+check,)

console.log(reducearray);


// Task 10

for(let i =0;i<=arrayfirst.length-1;i++){
console.log(arrayfirst[i]);
}



// Task 11
arrayfirst.forEach(e => {
    console.log(e);
});

// Task 12

let twodarray = [[12, 5, 90],  [3, 18, 2],    [4, 5, 6],    [7, 8, 9],];

console.log(twodarray);

//Task 13

console.log(twodarray[3][2]);


console.log("# day 6 completed");
  


