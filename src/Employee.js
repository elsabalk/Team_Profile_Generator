class Employee{
    constructor (id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getById(){
        return this.id;
    }

    getByName(){
        return this.name;
    }

    getByEmail(){
        return this.email;

    }
}

module.exports = Employee;