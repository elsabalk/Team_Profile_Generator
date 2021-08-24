const Employee = require ("./Employee");

class Manager extends Employee{
    constructor(id, name, email, officeNumber){
        super(id, name, email);
        this.officeNumber = officeNumber;
        this.title = "Manager";

    }

    getByOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;