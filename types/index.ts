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

export interface Size {
  id: number;
  value: string;
  name: string;
}

export interface Shipping {
  id: number;
  value: string;
  name: string;
}
