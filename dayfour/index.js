//  Task one
console.log("lets do It");





let i=1;





for (i=0; i<=10; i++){
console.log(i,"Print i one to ten");
}

//  Task two

for(i=1; i<=10; i++){
    console.log(`5 * ${i} = ${5*i}`,"5 table");
}

//task three

let k=1
let sum=0
while (k<=10) {

 sum +=k
    
    k++;
}
console.log(sum,"Sum");

// Task four
let j=10

while(j>=1){
    console.log(j,"Prink j 10 to 1");
    j--
}

//Task 5

let pnotf=1

do {
    console.log(pnotf,"prinnumonetofive");
    pnotf ++;
} while (pnotf <= 5);


// Task 6

let factorailnum=12
let loppi=1;
let ans=1
do {

    ans=ans * loppi
    loppi ++;   

} while (loppi <= factorailnum);

console.log(ans,"Factoria");

// task 7 

let pritstar=1
let b

for(b=1; b<=5 ; b++){
    let stars = '*'.repeat(b)
    console.log(stars)
}

//  Task 8

for(let h=0 ; h<=10; h++){
    if(h==5){
        continue
    }
    console.log(h);
}


//  Task 9

for(let r=0 ; r<=10; r++){
    if(r==7){
        break;
    }
    console.log(r);
}
