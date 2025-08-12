import { IRecordController } from "../interfaces";
import { PostTask } from "../interfaces/IRecord.interface";

export class RecordController implements IRecordController {
  async get(): Promise<any> {
    console.log("get");
    return;
  }

  async post(): Promise<any> {
    console.log("post");
    return;
  }

  async put(): Promise<any> {
    console.log("put");
    return;
  }

  async delete(): Promise<any> {
    console.log("delete");
    return;
  }
}
