import Api, { RdResponse } from "../api";
import {
  checkBody,
  containerLinkBody,
  folderBody,
  linkBody,
} from "./type.body";
import {
  check,
  checkData,
  containerFile,
  containerFileData,
  containerLink,
  containerLinkData,
  folder,
  folderData,
} from "./type.return";

const path = "/unrestrict";

const Unrestrict = Api && {
  check: (body: checkBody) =>
    fetch(Api.queryUrl(path + "/check"), {
      method: "POST",
      headers: Api.headers,
      body: new URLSearchParams(body),
    })
      .then((res) => Api.responseEngine(res))
      .then((res: RdResponse) => res.json())
      .then((res: checkData) => ({
        data: res,
        success: Api.success,
        error: Api.error,
      }))
      .then((res: check) => res),
  link: (body: linkBody) =>
    fetch(Api.queryUrl(path + "/link"), {
      method: "POST",
      headers: Api.headers,
      body: new URLSearchParams(body),
    })
      .then((res) => Api.responseEngine(res))
      .then((res: RdResponse) => res.json())
      .then((res: checkData) => ({
        data: res,
        success: Api.success,
        error: Api.error,
      }))
      .then((res: check) => res),
  folder: (body: folderBody) =>
    fetch(Api.queryUrl(path + "/folder"), {
      method: "POST",
      headers: Api.headers,
      body: new URLSearchParams(body),
    })
      .then((res) => Api.responseEngine(res))
      .then((res: RdResponse) => res.json())
      .then((res: folderData) => ({
        data: res,
        success: Api.success,
        error: Api.error,
      }))
      .then((res: folder) => res),
  // * a faire
  containerFile: (file: File) =>
    fetch(Api.queryUrl(path + "/containerFile"), {
      method: "PUT",
      headers: Api.headers,
      body: file,
    })
      .then((res) => Api.responseEngine(res))
      .then((res: RdResponse) => res.json())
      .then((res: containerFileData) => ({
        data: res,
        success: Api.success,
        error: Api.error,
      }))
      .then((res: containerFile) => res),

  containerLink: (body: containerLinkBody) =>
    fetch(Api.queryUrl(path + "/containerFile"), {
      method: "POST",
      headers: Api.headers,
      body: new URLSearchParams(body),
    })
      .then((res) => Api.responseEngine(res))
      .then((res: RdResponse) => res.json())
      .then((res: containerLinkData) => ({
        data: res,
        success: Api.success,
        error: Api.error,
      }))
      .then((res: containerLink) => res),
};

export default Unrestrict;
