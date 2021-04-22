import Api from "../api";
import {
  checkBody,
  containerLinkBody,
  folderBody,
  linkBody,
} from "./type.body";
import { check } from "./type.return";

const path = "/unrestrict";

const Unrestrict = Api && {
  check: (body: checkBody) =>
    fetch(Api.queryUrl(path + "/check"), {
      method: "POST",
      headers: Api.headers,
      body: new URLSearchParams(body),
    })
      .then((res) => res.json())
      .then((res: check) => res),

  link: (body: linkBody) =>
    fetch(Api.queryUrl(path + "/link"), {
      method: "POST",
      headers: Api.headers,
      body: new URLSearchParams(body),
    })
      .then((res) => res.json())
      .then((res: check) => res),

  folder: (body: folderBody) =>
    fetch(Api.queryUrl(path + "/folder"), {
      method: "POST",
      headers: Api.headers,
      body: new URLSearchParams(body),
    })
      .then((res) => res.json())
      .then((res: string[]) => res),
  // * a faire
  containerFile: (file: File) =>
    fetch(Api.queryUrl(path + "/containerFile"), {
      method: "PUT",
      headers: Api.headers,
      body: file,
    })
      .then((res) => res.json())
      .then((res: string[]) => res),

  containerLink: (body: containerLinkBody) =>
    fetch(Api.queryUrl(path + "/containerFile"), {
      method: "POST",
      headers: Api.headers,
      body: new URLSearchParams(body),
    })
      .then((res) => res.json())
      .then((res: string[]) => res),
};

export default Unrestrict;
