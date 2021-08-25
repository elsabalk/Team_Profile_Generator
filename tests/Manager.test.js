const Manager = require("C:/Users/elsab/desktop/TeamProfileGenerator/Team_Profile_Generator/src/Manager.js");

test("Validate able to get office number value by getByOfficeNumber()", () => {
    const officeNumber = "800-324-5392";
    
    const validate = new Manager(1, "Office Number", "testOfficeNumber@gmail.com", officeNumber);
    expect(validate.getByOfficeNumber()).toBe(officeNumber);
  });

  test("Validate able to get GitHub username Value by constructor", () => {
    const officeNumber = "800-554-1111";

    const validate = new Manager(2, "GitHub Test 2", "testOfficeNumber@gmail.com", officeNumber);
    expect(validate.officeNumber).toBe(officeNumber);
  });