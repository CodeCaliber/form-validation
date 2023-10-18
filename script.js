

//Async
/*
console.log("start");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));

delay(1000)
.then(() => {
    console.log("inside promise");
})
.then(() => {

    console.log("end");
})

const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        const success = true;
        if (success) {
            resolve("Operation success!")
        } else {
            reject("Operation failed!")
        }
    },2000)
});




myPromise
.then ((result) => {
    console.log(result); //Success
})
.catch((error) => {
    console.log(error); //error
})

async function fetchAsnycData(){
    try {
        const result = await myPromise
        console.log(result); //Success
    } catch (error){
        console.log(error); //error
    }
}


fetchAsnycData();
class User {
    constructor(firstName,lastName,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.loggedIn = false;
    }
    login(){
        this.loggedIn = true;
        console.log(`${this.firstName} has logged in`);
    }
    logout(){
        this.loggedIn = false;
        console.log(`${this.firstName} has logged out`);
    }
}

let userOne = new User('John','Gibson','john@something.com');
let userTwo = new User('Mary','Johnnson','Mary@something.com');
userOne.login();
userOne.logout();

//Getter and setter
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(_value){
        const parts = _value.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[1]
        console.warn('changed the name')
    }
}
*/
//Static

class UserService {
    constructor(uri){
        this.baseUri = uri
    }

    static singUp(user){
        console.log("Registering user")
        console.log(user)
    }
    static signIn(email,password){
        console.log(`loggin in user with ${email} and password is: ${password}`);
    }
}

UserService.singUp({firstName:'John', lastName:'Gibson'});
UserService.signIn('john@gmail.com','123456789');













































