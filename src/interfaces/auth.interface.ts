export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends ILogin {
  name: string;
}
export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthResponse extends ITokens {
  user: {
    id?: string;
    name?: string;
    email?: string;
    role?: string;
    avatar?: string;
  };
}

export interface IResetPassword {
  token: string;
  password: string;
}
