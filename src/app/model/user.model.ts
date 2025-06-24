export class UserRegister{
  userId: number;
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;

  constructor() {
    this.userId = 0;
    this.email = '';
    this.fullName = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
