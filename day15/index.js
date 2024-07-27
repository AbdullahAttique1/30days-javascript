// Task one

function Outse() {

   const outfun="Hellow world Outer"

   return function inenr() {
       console.log(outfun);
       return outfun
       
   }
   
}

const infun=Outse()
console.log(infun(),"Iner function");

// TAsk two 

//cunter function

function CounterFun(params) {
   let conter=0

 return   {

      increase : function() {          
       return  ++ conter
       }
       ,
       getValue: function() {
           return conter;
       }
       
   }
}

const contershow=CounterFun()



console.log(contershow.increase()); 
console.log(contershow.increase()); 
console.log(contershow.increase());
console.log(contershow.getValue(),"Get value");

// TAsk tHree


// function uniqe id

function Idgenerater() {
   let myid=0;
   return function Increaceid() {
      return ++ myid
       
   } 
   
}

const idincraeser=Idgenerater()
idincraeser()
console.log(idincraeser(),"idd");

// TAsk four

function GreetFun(user) {

   return function USergreet() {
       const message=`Hey you have beautifull name ${user}`
       return message
   }
   
}

const usermesege=GreetFun("Abdulah")
console.log(usermesege(),"User message task 4");




// Task 5

function CreateFunction() {

    let functionsarray = []
    for (let index = 0; index < 7; index++) {
        functionsarray.push(
            (function (index) {
                return function name() {
                    console.log(`function index is ${index}`);
                }

            })(index)
        )

    }
    return functionsarray
}

const allfunctions = CreateFunction()

allfunctions.forEach((func) => func())


// Task 6

const itemCollection = (function () {
       let items = []

    return {
          add: function (item) {
            items.push(item);
        },
        remove: function (item) {

            const itemIndex = items.indexOf(item)

              if (itemIndex !== -1) {
                items.splice(itemIndex, 1)

            }
        },
        list: function () {
            return [...items];
        }
    };
})();


itemCollection.add("Cat");


itemCollection.add("Dog");
 console.log(itemCollection.list())

  itemCollection.remove("Cat");


  console.log(itemCollection.list())

  // Task 7

  
  function createMemoizer(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.hasOwnProperty(key)) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}


function addNumbers(a, b) {
    return a + b;
}


const memoizedAddNumbers = createMemoizer(addNumbers);


console.log(memoizedAddNumbers(4,8))
console.log(memoizedAddNumbers(1, 2))

// TAsk 8

function createFactorialMemoizer() {
    const cache = {}

    
    function factorial(n) {
        if (n === 0 || n === 1) {


            return 1;
        }
        if (cache.hasOwnProperty(n)) {

            return cache[n]

        }
        const result = n * factorial(n - 1)


        cache[n] = result

        return result
    }
    
    return factorial;

}


const memoizedFactorial = createFactorialMemoizer()



console.log(memoizedFactorial(5))


console.log(memoizedFactorial(6))




// complete but not

