export interface DefaultResponse {
  isSuccess: false;
  data: any;
  message: string;
}

export interface RegisterUserCredential {
  email: string;
  password: string;
  username: string;
}
