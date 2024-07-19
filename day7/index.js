// day 7


// Task 1

let book={title:"Javascript mAstry",Author:"Harry",year:null,

    Getyear(year){
     
this.year=year
return year
    },

    gettitandaut:function(){
        return `${this.title},${this.Author}`
    }


}

console.log(book);

// Task 2

console.log(book.title,book.Author);

// TAsk 3


console.log(book.gettitandaut());
//Task 4

const resultofyear=book.Getyear(2024444)

console.log(resultofyear,"resfor year");


console.log(book.year,"resfor year from fun");

// Task 5

const library = {
    name:"Harry library",

books:[

    {title:"Javascript", author:"Harry"},
    {title:"Python", author:"Harry"},
    {title:"HTML", author:"Harry"},
    {title:"CSS", author:"Harry"},
    {title:"C++", author:"Harry"},
 
],
getyearandtile:function(){
    console.log(books.title,"tjosadj");
        return this.books.map
    }

}

console.log(library);


// Task 6


console.log(library.name);


for (let i = 0; i < library.books.length; i++) {
   

    console.log(library.books[i].title);
    
}

// Task 7 & 8


const libraries={
name:"Harry",

books: [
    { title: "Node", author: "Harry",year:2024 },
    { title: "Python", author: "Harry",year:2024 },
    { title: "HTML", author: "Harry" ,year:2024},
    { title: "CSS", author: "Harry" ,year:2024},
    { title: "C++", author: "Harry",year:2024 }
],

// task 8
getdatatofbooks: function () {
    
for (const key in this.books) {
    if (Object.hasOwnProperty.call(this.books, key)) {
        const element = this.books[key];
        console.log(element.title,element.author,element.year);
        
    }
}

},

// task 9
logKeysandvalues: function() {
    this.books.forEach((book) => { 
        console.log('keys:', Object.keys(book));
        
     
        console.log('values:', Object.values(book))   
        
    });
}
,




Getyearandtitle:function(){

    const title=this.books.map((e)=>{

        console.log(e,"Tadadasd");
        return {title :e.title ,year :e.year}

    })
    
    return title

    
}

}


const resultofdata=libraries.Getyearandtitle()

console.log(resultofdata,"jsad");


// Task 8

libraries.getdatatofbooks()

// TAsk 9

libraries.logKeysandvalues()