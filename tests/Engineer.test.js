const Engineer = require("./src/Engineer");

test("Validate able to get GitHub username value by getGithubUsername()", () => {
    const username = "elsabalk";

    const validate = new Engineer(1, "GitHub Test 1", "testGitHubUser@gmail.com", username);
    expect(validate.getGithubUsername()).toBe(username);
  });

  test("Validate able to get GitHub username Value by constructor", () => {
    const username = "elsabalk";

    const validate = new Engineer(2, "GitHub Test 2", "testGitHubUser@gmail.com", username);
    expect(validate.githubUsername).toBe(username);
  });