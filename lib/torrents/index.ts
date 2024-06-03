import Api from "../api";
import { addMagnetBody, addTorrentBody } from "./type.body";
import { addTorrentParams } from "./type.params";
import {
  activeCount,
  addMagnet,
  availableHosts,
  files,
  torrent,
} from "./type.return";

const path = "/torrents";

const Torrents = { // params?: torrentsParams
  get: () => Api.get(path),
  info: (id: string | string[] | number) =>
    Api.get<torrent>(path + "/info/" + id),
  activeCount: () => Api.get<activeCount>(path + "/activeCount"),
  availableHosts: () => Api.get<availableHosts>(path + "/availableHosts"),
  addTorrent: (params: addTorrentParams, body: addTorrentBody) =>
    Api.put<string>(
      Api.queryUrl(path + "/addTorrent", params),
      body,
    ),
  addMagnet: (body: addMagnetBody) => {
    const form = new FormData();
    form.append("magnet", body.magnet);
    if (body.host) form.append("host", body.host);
    // const options = {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // };
    return Api.post<addMagnet>(path + "/addMagnet", form);
  },
  delete: (id: string | string[] | number) =>
    Api.delete(path + "/" + id) as Promise<any>,
  selectFiles: async (id: string, files: string[]) => {
    const body = new URLSearchParams();
    if (files.length > 1) body.append("files", files.join(","));
    else body.append("files", files[0]);
    const data = files.length > 1 ? body : files[0];
    return await Api.post<files>(path + "/selectFiles/" + id, data);
  },
};

export default Torrents;
