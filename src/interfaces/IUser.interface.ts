export interface IUser {
  id: string;
  email: string;
  fullName?: string;
}

export interface IUserController {
  getIdUser(idUser: string): Promise<any>;
  registerUser(user: IUser): Promise<any>;
}
