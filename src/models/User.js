class UserSignin {
    constructor(username, password) {
        this.username = username;
        this.password = password;
      }
}

class UserSignup {
    constructor(identification, name, lastName, email, username, password, appPassword) {
        this.identification = identification;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.appPassword = appPassword;
      }
}

export { UserSignin, UserSignup };