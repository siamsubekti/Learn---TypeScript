class Student {
    fullName: String;
    constructor(public firstName: string, public middleInitial: string, public lastName: string){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName : string;
    lastName : string;
}

function gretter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Tri", "M.", "User");

document.body.textContent = gretter(user);