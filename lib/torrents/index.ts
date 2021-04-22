import Api from "../api";
import { addMagnetBody } from "./type.body";
import { torrentsParams } from "./type.params";
import {
  activeCount,
  addTorrent,
  availableHosts,
  torrent,
  torrents,
} from "./type.return";

const path = "/torrents";

const Torrents = Api && {
  get: (params: torrentsParams) =>
    fetch(Api.queryUrl(path, params), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: torrents) => res),

  info: (id: string | string[] | number) =>
    fetch(Api.queryUrl(path + "/info/" + id), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: torrent) => res),

  activeCount: () =>
    fetch(Api.queryUrl(path + "/activeCount"), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: activeCount) => res),

  availableHosts: () =>
    fetch(Api.queryUrl(path + "/availableHosts"), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: availableHosts) => res),

  addTorrent: () =>
    // TODO
    fetch(Api.queryUrl(path + "/addTorrent"), {
      method: "PUT",
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: addTorrent) => res),

  addMagnet: (body: addMagnetBody) =>
    // TODO
    fetch(Api.queryUrl(path + "/addTorrent"), {
      method: "POST",
      headers: Api.headers,
      body: new URLSearchParams(body),
    })
      .then((res) => res.json())
      .then((res: addTorrent) => res),
};

export default Torrents;
