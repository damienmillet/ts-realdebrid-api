import Api from "../api";
import { addMagnetBody, addTorrentBody } from "./type.body";
import { addTorrentParams, torrentsParams } from "./type.params";
import { addMagnetData, deleteId, files } from "./type.return";

const path = "/torrents";

const Torrents = { // params?: torrentsParams
  get: () => Api.get(path),
  info: (id: string | string[] | number) => Api.get(path + "/info/" + id),
  activeCount: () => Api.get(path + "/activeCount"),
  availableHosts: () => Api.get(path + "/availableHosts"),
  addTorrent: (params: addTorrentParams, body: addTorrentBody) =>
    Api.put(Api.queryUrl(path + "/addTorrent", params), body) as Promise<
      string
    >,
  addMagnet: (body: addMagnetBody) =>
    Api.post(path + "/addMagnet", body) as Promise<addMagnetData>,
  delete: (id: string | string[] | number) =>
    Api.delete(path + "/" + id) as Promise<deleteId>,
  selectFiles: async (id: string, files: string[]) => {
    const body = new URLSearchParams();
    if (files.length > 1) body.append("files", files.join(","));
    else body.append("files", files[0]);
    const data = files.length > 1 ? body : files[0];
    return await Api.post(path + "/selectFiles/" + id, data) as Promise<files>;
  },
};

export default Torrents;
