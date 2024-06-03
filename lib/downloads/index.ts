import Api from "../api";
import { downloadsParams } from "./type.params";
import { download } from "./type.return";

const path = "/downloads";

const Downloads = {
  get: (params?: downloadsParams) => Api.get<download>(path), // download[]
  delete: (id: string | string[] | number) => Api.delete<any>(path + "/" + id),
};

export default Downloads;
