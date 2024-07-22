
// Task one
const selectect = document.getElementById("abd").innerHTML = "abdullah";
const selectecttoremove = document.getElementById("abd").innerHTML = "";



// Task 2


const changecolor = document.getElementsByClassName("mon")

for (let i = 0; i < changecolor.length; i++) {



    changecolor[i].style.backgroundColor = "blue"
    changecolor[i].style.color = "white"


    // task 3
    const newdivele = document.createElement("div")
    newdivele.innerText = "Its is apended"

    changecolor[i].appendChild(newdivele)

}


// task 3


const ul = document.getElementsByTagName("ul")






for (let i = 0; i < ul.length; i++) {

    const li = document.createElement("li")


    li.innerHTML = "Its a li in ul"


    ul[i].appendChild(li)

}


// Task 4

const removeelemt = document.getElementsByClassName("remove")




for (let i = 0; i < removeelemt.length; i++) { 

    removeelemt[0].remove()

  


}


//task 5


const allelemenone = document.getElementsByClassName("myele");

       
        const allelemenArrayone = Array.from(allelemenone)

        allelemenArrayone.forEach((element) => {
          
          

        
            while (element.lastChild) {
               
              
               
                element.removeChild(element.lastChild);
            }
        });



// Task 6


const allelemen = document.getElementsByClassName("myele");

       
        const allelemenArray = Array.from(allelemen)

        allelemenArray.forEach((element) => {
          
          

        
            while (element.lastChild) {
               
           

               
                element.removeChild(element.lastChild);
            }
        });

        // Task 7

        const iamgech=document.getElementsByTagName("img")

        for (let i = 0; i < iamgech.length; i++) {
            iamgech[i].src = "https://images.unsplash.com/photo-1721296382202-8b917fd0963e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        }

        // Task 8


        const oldcss=document.getElementsByClassName("oldcss");


        for (let index = 0; index < oldcss.length; index++) {

            const element = oldcss[index];

            element.style.backgroundColor='red'
            
            //change to new color 
            
            element.style.backgroundColor='blue'
            
            
        }

// task 9


function myFunction() {
    const para=   document.getElementsByTagName("p")


    for (let i = 0; i < para.length; i++) {
        para[i].innerHTML = "It's a new para";
    }

 
  }
  

const btn=document.getElementsByTagName("button")


for (let index = 0; index < btn.length; index++) {

    const element = btn[index];
    element.addEventListener("click", myFunction);



}



// task 10

const borderle = document.getElementsByClassName("berder")

for (let i = 0; i < borderle.length; i++) {
    borderle[i].addEventListener("mouseover", function() {
        this.style.border = "2px solid red"
    });
}

// finished