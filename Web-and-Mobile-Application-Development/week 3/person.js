class student {
    constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    }
    getPersonInfo() {
    return`Name: ${this.name} Age: ${this.age}  email: ${this.email} `
  
    }
    }
    module.exports = student;