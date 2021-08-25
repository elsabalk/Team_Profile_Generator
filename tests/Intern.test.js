const Intern = require("./src/Intern");

test("Validate able to get School Value by getSchoolName()", () => {
    const schoolName = "UOFM";
    const validate = new Intern(1, "Intern Test 1", "testIntern@gmail.com", schoolName);
    const results = expect(validate.getSchool()).toBe(schoolName);
    console.log(results);
  });

  test("Validate able to get School Value by constructor", () => {
    const schoolName = "UOFM";
    const validate = new Intern(2, "Intern Test 2", "testIntern@gmail.com", schoolName);
    const results = expect(validate.school).toBe(schoolName);
    console.log(results);
  });