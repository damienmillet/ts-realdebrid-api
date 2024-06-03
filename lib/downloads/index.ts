import Api from "../api";
import { downloadsParams } from "./type.params";
import { deleteId, download } from "./type.return";

const path = "/downloads";

const Downloads = {
  get: (params?: downloadsParams) => Api.get(path), // download[]
  delete: (id: string | string[] | number) =>
    Api.delete(path + "/" + id) as Promise<deleteId>,
};

export default Downloads;
