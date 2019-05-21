export class UserInfo {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string[];
  password: string;


  constructor(username: string = null, firstName: string, lastName: string, email: string, password: string) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = ['user'];
    this.password = password;
  }
}
