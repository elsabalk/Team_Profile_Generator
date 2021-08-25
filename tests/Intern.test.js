const Intern = require("C:/Users/elsab/desktop/TeamProfileGenerator/Team_Profile_Generator/src/Intern.js");

test("Validate able to get School Value by getSchoolName()", () => {
    const schoolName = "UOFM";
    const validate = new Intern(1, "Intern Test 1", "testIntern@gmail.com", schoolName);
    const results = expect(validate.getSchoolName()).toBe(schoolName);
  });

  test("Validate able to get School Value by constructor", () => {
    const schoolName = "UOFM";
    const validate = new Intern(2, "Intern Test 2", "testIntern@gmail.com", schoolName);
    const results = expect(validate.school).toBe(schoolName);
  });