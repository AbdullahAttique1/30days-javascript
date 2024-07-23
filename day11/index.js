console.log("Hellow world");
// Task one
let myPromise = new Promise(function (myResolve) {


    myResolve();

});


myPromise.then(
    function (value) {
        setTimeout(() => {
            console.log("Hellow world");
        }, 2000);
    },

);



// Task Two



const rejectpromice = new Promise((resolve, reject) => {
    setTimeout(() => {

        reject("This is rejeted")
    }, 2000);

})
rejectpromice.catch((error) => {
    console.log(error);
})
// Task three

function fetchdata(url, delay) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(`data fetched with server ${url}`)

        }, delay);


    })

}

fetchdata("https://www.youtube.com/watch?v=GgmFC8y8q3k&list=RDDulnr8YvJW8&index=4", 1000).then(
    (data) => {
        console.log(data);

        return fetchdata("https://www.youtube.com/watch?v=GgmFC8y8q3k&list=RDDulnr8YvJW8&index=4", 1500)

    }).then((data) => {
        console.log(data);
        return fetchdata("https://www.youtube.com/watch?v=GgmFC8y8q3k&list=RDDulnr8YvJW8&index=4", 2000)
    })
    .then((data) => {


        console.log(data);
        return fetchdata("https://www.youtube.com/watch?v=GgmFC8y8q3k&list=RDDulnr8YvJW8&index=4", 2500)

    })
    .then((data) => {
        console.log(data);

        console.log('all data fetched by me.')


    })
    .catch((error) => {


        console.error('Error fetching data ', error)
    });

// Task 4

async function asyncfun() {
 const result=  await promiceresoler

   return result
    
}

const promiceresoler=new Promise((resolve, reject) => {

  return  resolve("hey is it worked")
})

asyncfun().then((answerresolver)=>{

    console.log(answerresolver,"answer");
})

// Task 5

const promicerejdected=new Promise((resolve, reject) => {

    return  reject("hey is it rejected")
  })


async function resjpromice() {
try {
    const result=  await promicerejdected

    return result
} catch (error) {
    console.log(error,"Hey its a error");
    
}
    
}

resjpromice().then((rej) => {
    if (rej) {
        console.log(rej, "rejected");
    } else {
        console.log("Promise was rejected and caught.");
    }
});

//// Task 6

const fetchapidata=new Promise((resolve, reject) => {
    resolve(fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json)))
})


// Task 7

async function Getdataasync() {

    let res=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return res

    
}

Getdataasync().then((data)=>{
    data.json().then((json)=>{
        console.log(json,"getasydataapi");
    })
})

// Task 8

const promisefirst = Promise.resolve(10)

const promisesec = 42

const promiselast = new Promise((resolve) => {

  setTimeout(resolve, 82, 'Itsa a promice')

});

Promise.all([promisefirst, promisesec, promiselast]).then((data) => {

  console.log(data);

});

// task 9



Promise.race([promisefirst, promisesec, promiselast]).then((value) => {
    console.log(value); 
}).catch((error) => {
    console.error(error);
});

// its done