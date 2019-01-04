class Person{
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		return `${this.firstName}, ${this.lastName}`;
	}
}

const person = new Person("Ogundeji","Yusuff");
person.getFullName();

class user extends Person{
    constructor(firstName, lastName,email,password){
        super(firstName,lastName);
        this.email = email;
        this.password = password;
    }
     getEmail(){
		return this.email;
	}
	getPassword(){
		return this.password;
	}
}

function App() {
    let user = new user("Dan", 
                        "Abramov", 
                        "dan@abramov.com", 
                        "iLuvES6")
    user.getFullName() //> "Dan Abramov"
    user.getEmail() //> “dan@abramov.com”
    user.getPassword() //> “iLuvES6”
    user.firstName //> “Dan”
    user.lastName //> “Abramov”
    user.email //> “dan@abramov.com”
    user.password //> “iLuvES6”
  }

  App();