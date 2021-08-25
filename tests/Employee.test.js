const Employee = require("C:/Users/elsab/desktop/TeamProfileGenerator/Team_Profile_Generator/src/Employee.js");
 
describe("Validate Employee Class", () => {
    it("Validate able to call an instantiate of the Employee class", () => {
        const object = new Employee();
        expect(typeof(object)).toBe("object");
    });

    test("Validate able to pass an email address to the constructor", () => {
        const testValue = "elsaBalk@test.com";
        const validate = new Employee("Test", 1, testValue);
        expect(validate.email).toBe(testValue);
      });

      test("Validate able to use getByName method from Employee class", () => {
        const name = "Elsabalk";
        const validate = new Employee(1, name, "");
        expect(validate.getByName()).toBe(name);
      });

      test("Validate able to use getByEmail method from Employee class", () => {
        const emailAddress = "Elsabalk@hotmail.com";
        const validate = new Employee(1,"Test",emailAddress);
        expect(validate.getByEmail()).toBe(emailAddress);
      });

      
      test("Validate able to use getById method from Employee class", () => {
        const id = 1;
        const validate = new Employee(id,"Test","emailAddress");
        expect(validate.getById()).toBe(id);
      });
})