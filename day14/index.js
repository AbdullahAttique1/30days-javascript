// Task one
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet(){
        const message=`hey ${this.name} your age is ${this.age} is beautifull`
        console.log(message);
        return message
    }
secondage(newage){
    this.age=newage
}
static Greetmesgae() {
    return "Helo this is a genraicc greeting message";
}



}


const personarea=new Person("name",12)
console.log(personarea);

personarea.greet()


// Task Two

personarea.secondage(18)
console.log(personarea.age);

// Task 3

class Student extends Person{
    constructor(name,age,studentid) {
        super(name, age)
        this.studentid = studentid
      
           }
           returnid(){
            
            return this.studentid
        }

        greet() {
            const message = `hey ${this.name} your age is ${this.age}  beautiful your student id is ${this.studentid}`;
            console.log(message);
            return message;
        }



}

const StudentIdh=new  Student ("jhon",12,1234)
console.log(StudentIdh.returnid(),"student if");

// Task 4

StudentIdh.greet()
console.log(StudentIdh.greet());

// TAsk 5

const genmessage=Person.Greetmesgae()
console.log(genmessage,"Task 5");



/////////////////////////////////tak 6 new///////////////

class Studperson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
      }

}

class OriStuden extends Studperson{
static increment=0
constructor(name, age, Id) {
    super(name, age);
    this.Id = Id;
    OriStuden.increment++;
  }
}
const studendfierst = new OriStuden("Harry", 8, 159);
const person2 = new OriStuden("Marry", 5, 4582);
const person3 = new OriStuden("naza",58, 8520);

console.log(OriStuden.increment,"task 6");


//task 7

class Taskk7person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
      }
      get myname(){
        return `${this.firstname} ${this.lastname}`;
      }

      set myfullname(name){
        const [firstname,lastname]=name.split(' ');
        this.firstname=firstname;
        this.lastname=lastname;
      }
}
const task7personele=new Taskk7person("faha","mustafa")


console.log(task7personele.myname);

//TAsk 8
const task8personele=new Taskk7person("faha","mustafa")


task8personele.myfullname = "New Fahad";

console.log(task8personele.myname,"tak8");


// Task 9 and 10 
class Account {
    #balance; 

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log('Invalid deposit amount. Please provide a positive value.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log('Insufficient funds or invalid withdrawal amount.');
        }
    }

    getBalance() {
        return this.#balance;
    }
}

  