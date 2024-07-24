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