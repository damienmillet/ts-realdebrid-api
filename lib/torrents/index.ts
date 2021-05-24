import Api from "../api";
import { addMagnetBody } from "./type.body";
import { torrentsParams } from "./type.params";
import {
  activeCount,
  activeCountData,
  addMagnet,
  addMagnetData,
  addTorrent,
  addTorrentData,
  availableHosts,
  availableHostsData,
  deleteId,
  torrent,
  torrentData,
  torrents,
  torrentsData,
} from "./type.return";

const path = "/torrents";

const Torrents = Api && {
  get: (params: torrentsParams) =>
    fetch(Api.queryUrl(path, params), {
      headers: Api.headers,
    })
      .then((res) => Api.responseEngine(res))
      .then((res: Response) => res.json())
      .then(
        (res: torrentsData) => ({
          data: res,
          success: Api.success,
          error: Api.error,
        }),
        () => ({ success: Api.success, error: Api.error })
      )
      .then((res: torrents) => res),

  info: (id: string | string[] | number) =>
    fetch(Api.queryUrl(path + "/info/" + id), {
      headers: Api.headers,
    })
      .then((res) => Api.responseEngine(res))
      .then((res: Response) => res.json())
      .then(
        (res: torrentData) => ({
          data: res,
          success: Api.success,
          error: Api.error,
        }),
        () => ({ success: Api.success, error: Api.error })
      )
      .then((res: torrent) => res),

  activeCount: () =>
    fetch(Api.queryUrl(path + "/activeCount"), {
      headers: Api.headers,
    })
      .then((res) => Api.responseEngine(res))
      .then((res: Response) => res.json())
      .then(
        (res: activeCountData) => ({
          data: res,
          success: Api.success,
          error: Api.error,
        }),
        () => ({ success: Api.success, error: Api.error })
      )
      .then((res: activeCount) => res),

  availableHosts: () =>
    fetch(Api.queryUrl(path + "/availableHosts"), {
      headers: Api.headers,
    })
      .then((res) => Api.responseEngine(res))
      .then((res: Response) => res.json())
      .then(
        (res: availableHostsData) => ({
          data: res,
          success: Api.success,
          error: Api.error,
        }),
        () => ({ success: Api.success, error: Api.error })
      )
      .then((res: availableHosts) => res),

  addTorrent: () =>
    fetch(Api.queryUrl(path + "/addTorrent"), {
      method: "PUT",
      headers: Api.headers,
    })
      .then((res) => Api.responseEngine(res))
      .then((res: Response) => res.json())
      .then(
        (res: addTorrentData) => ({
          data: res,
          success: Api.success,
          error: Api.error,
        }),
        () => ({ success: Api.success, error: Api.error })
      )
      .then((res: addTorrent) => res),

  addMagnet: (body: addMagnetBody) =>
    fetch(Api.queryUrl(path + "/addMagnet"), {
      method: "POST",
      headers: Api.headers,
      body: new URLSearchParams(body),
    })
      .then((res) => Api.responseEngine(res))
      .then((res: Response) => res.json())
      .then(
        (res: addMagnetData) => ({
          data: res,
          success: Api.success,
          error: Api.error,
        }),
        () => ({ success: Api.success, error: Api.error })
      )
      .then((res: addMagnet) => res),

  delete: (id: string | string[] | number) =>
    fetch(Api.queryUrl(path + "/delete/" + id), {
      method: "DELETE",
      headers: Api.headers,
    })
      .then((res) => Api.responseEngine(res))
      .then((res: Response) => res.json())
      .then(
        (res: unknown) => ({
          data: res,
          success: Api.success,
          error: Api.error,
        }),
        () => ({ success: Api.success, error: Api.error })
      )
      .then((res: deleteId) => res),
};

export default Torrents;
