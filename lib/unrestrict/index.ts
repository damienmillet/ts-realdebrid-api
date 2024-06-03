import Api from "../api";
import {
  checkBody,
  containerLinkBody,
  folderBody,
  linkBody,
} from "./type.body";
import {
  checkData,
  containerFileData,
  containerLinkData,
  folderData,
  linkData,
} from "./type.return";

const path = "/unrestrict";

const Unrestrict = {
  check: (body: checkBody) => Api.get<checkData>(path + "/check"),
  link: (body: linkBody) => Api.post<linkData>(path + "/link", body),
  folder: (body: folderBody) => Api.post<folderData>(path + "/folder", body),
  containerFile: (file: File) =>
    Api.put<containerFileData>(path + "/containerFile", file),
  containerLink: (body: containerLinkBody) =>
    Api.post<containerLinkData>(path + "/containerLink", body),
};

export default Unrestrict;
