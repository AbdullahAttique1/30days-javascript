console.log("hellow world");
// Task one 
function ErrorFun() {

   throw new Error("Its is internationall error")
    
}

try {
    const reserorfun=ErrorFun()
    console.log(reserorfun);
    
} catch (error) {
    console.log(error.message,"Error from cath");

    
}

// TAssk 2



function divideerr() {

    const devione=14
    const devidetwo=0

const result=devione/devidetwo

if (devidetwo === 0) {
throw new Error("Canont divide by 0")
    
}

return result

    
}


try {
    const devideans=divideerr()
    console.log(devideans);
    
} catch (error) {
    console.log(error.message);
    
}
// Task three

try {
throw new Error("Hey its  a error from try block")
    
} catch (error) {
    console.log(error.message,"Errror message from catch");
}
finally{
    console.log("Hellow from finally");
}

// Task 4

class customerror extends Error {
    constructor(message) {
        super(message)
        this.name = "customerror"
    }
}

function ThroughtError() {
    throw new customerror("hey its a custum error")
    
}

try {
    ThroughtError()

} catch (error) {
    console.log(error.message,"its catch cutum error");
    
}

// Task 5


function CheckUserinput(userinputs) {
if (userinputs.trim() === "" ) {
    
    throw new customerror("Hey plese enter something")
}
    
}

try {
    CheckUserinput("  ")
} catch (error) {
    console.log(error.message ,"Catched user input Error in catch ");
    
}
// task 6

function Promicetrycatch() {

    
    
   return new Promise((resolve, reject) => {
    const random=Math.random() > 0.5 
    
    if (random) {
        resolve ("Its resolved")
        
    }else{
        reject (new customerror("Hey its rejected promice task 6") )
    }
    
    
})


}


    Promicetrycatch().then((res)=>{
        console.log(res);

    }).catch((error)=>{
        console.log(error.message,"From task 6");
    })
    

// task 7

async function Randomresolve() {
    try {
        const result=await Promicetrycatch()
        console.log(result,"what hapenung");
    } catch (error) {
        console.log(error.message,"what hapenung");
    }
    
}

Randomresolve()

// tAsk 8

const data =fetch("falto.com").then(data=>console.log(data)).catch(error=>console.log(error.message,"Task 8"))

//task 9

async function handleinvaliderror() {

    try {
        
        const data=await fetch("falto.com")

        const result=await data.json()

        console.log(result);

        


    } catch (error) {
        console.log("last task ",error.message,"task 9");
        
    }
    
    
}

handleinvaliderror()