import Api from "../api";
import { downloadsParams } from "./type.params";
import { downloads } from "./type.return";

const path = "/downloads";

const Downloads = Api && {
  get: (params: downloadsParams) =>
    fetch(Api.queryUrl(path, params), { headers: Api.headers })
      .then((res) => res.json())
      .then((res: downloads) => res),
  delete: (id: string | string[] | number) =>
    fetch(Api.queryUrl(path + id), {
      method: "DELETE",
      headers: Api.headers,
    }).then((res) => res.json()),
};

export default Downloads;
