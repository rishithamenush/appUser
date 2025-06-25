export class UserRegister{
  userId: number;
  emailId: string;
  fullName: string;
  password: string;
  confirmPassword: string;

  constructor() {
    this.userId = 0;
    this.emailId = '';
    this.fullName = '';
    this.password = '';
    this.confirmPassword = '';
  }
}


export class LoginModel{
  emailId: string;
  password: string;

  constructor() {
    this.emailId = '';
    this.password = '';
  }
}
