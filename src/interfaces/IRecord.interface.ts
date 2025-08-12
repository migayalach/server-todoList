export interface IList {
  description: string;
  state: boolean;
}

export interface PostTask {
  idUser: string;
  task: IList;
}

export interface IRecordController {
  get(idUser: string, date: string): Promise<any>;
  post(info: PostTask): Promise<any>;
  put(info: PostTask): Promise<any>;
  delete(info: PostTask): Promise<any>;
}
