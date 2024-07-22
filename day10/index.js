console.log("Day 10 start");

// first task
function myFunction() {
    const para=   document.getElementsByTagName("p")
    
    
    for (let i = 0; i < para.length; i++) {
        para[i].innerHTML = "It's a new para";
    }
    
    
}

// second task

const btn=document.getElementsByTagName("button")


for (let index = 0; index < btn.length; index++) {
    
    const element = btn[index];
    element.addEventListener("click", myFunction);
    
    
    
}


const img = document.getElementById('abd')

img.addEventListener('dblclick', () => {
    
    img.style.display = 'none'
    
});



// third task
const boxele=document.getElementsByClassName("box")

for (let index = 0; index < boxele.length; index++) {
    
    const element = boxele[index];
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "green";
    });
    
    
}

// task 4



for (let index = 0; index < boxele.length; index++) {
    
    const element = boxele[index];
    const originalColor = window.getComputedStyle(element).backgroundColor

    element.addEventListener("mouseout", () => {
        element.style.backgroundColor = originalColor;
    });
    
    
}
// task 5: 
const inputs = document.getElementsByClassName("input")

let keyPressed = false

for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];

    input.addEventListener('keydown', () => {
        if (!keyPressed) {
            console.log('Key down pressed');
            keyPressed = true;
        }
    });

    input.addEventListener('keyup', () => {
        keyPressed = false;
    });
}

// task 6: 
const inputsUp = document.getElementsByClassName("input");

for (let index = 0; index < inputsUp.length; index++) {

 const input = inputsUp[index]


input.addEventListener('keyup', () => {
        console.log(input.value)
    });
}

// task 7

const btnsub = document.getElementById("submit");
const inputele = document.getElementById("text");

btnsub.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the form from submitting
    console.log(inputele.value); // Logs the current value of the input field
});
