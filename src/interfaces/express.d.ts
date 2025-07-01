export interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
  }
}
