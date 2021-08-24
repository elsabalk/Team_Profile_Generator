const Employee = require ("./Employee");

class Engineer extends Employee{
    constructor(id, name, email, githubUsername){
        super(id, name, email);
        this.githubUsername = githubUsername;
        this.title = "Engineer";

    }

    getGithubUsername() {
        return this.githubUsername;
    }
}
module.exports = Engineer;