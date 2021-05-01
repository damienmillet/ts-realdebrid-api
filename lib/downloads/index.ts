import Api, { RdResponse } from "../api";
import { downloadsParams } from "./type.params";
import { deleteId, downloads, downloadsData } from "./type.return";

const path = "/downloads";

const Downloads = Api && {
  get: (params: downloadsParams) =>
    fetch(Api.queryUrl(path, params), { headers: Api.headers })
      .then((res) => Api.responseEngine(res))
      .then((res: RdResponse) => res.json())
      .then((res: downloadsData) => ({
        data: res,
        success: Api.success,
        error: Api.error,
        counter: Api.counter,
      }))
      .then((res: downloads) => res),
  delete: (id: string | string[] | number) =>
    fetch(Api.queryUrl(path + id), {
      method: "DELETE",
      headers: Api.headers,
    })
      .then((res) => Api.responseEngine(res))
      .then((res: RdResponse) => res.json())
      .then((res: unknown) => ({
        data: res,
        success: Api.success,
        error: Api.error,
        counter: Api.counter,
      }))
      .then((res: deleteId) => res),
};

export default Downloads;
