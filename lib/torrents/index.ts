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

const Torrents = {
  addTorrent: (params: addTorrentParams, body: addTorrentBody) =>
    Api.put<string>(
      Api.queryUrl(path + "/addTorrent", params),
      body,
    ),
  selectFiles: async (id: string, files: string[]) => {
    const body = new FormData();
    if (files.length > 1) body.append("files", files.join(","));
    else body.append("files", files[0]);
    return await Api.post<files>(path + "/selectFiles/" + id, body);
  },
};

export default Torrents;
