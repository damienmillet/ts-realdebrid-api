import Api from "../api";
import {
  checkBody,
  containerLinkBody,
  folderBody,
  linkBody,
} from "./type.body";
import {
  check,
  containerFile,
  containerLink,
  folder,
  link,
} from "./type.return";

const path = "/unrestrict";

const Unrestrict = {
  check: (body: checkBody) => Api.get<check>(path + "/check"),
  link: (body: linkBody) => Api.post<link>(path + "/link", body),
  folder: (body: folderBody) => Api.post<folder>(path + "/folder", body),
  containerFile: (file: File) =>
    Api.put<containerFile>(path + "/containerFile", file),
  containerLink: (body: containerLinkBody) =>
    Api.post<containerLink>(path + "/containerLink", body),
};

export default Unrestrict;
