import Api from "../api";
import {
  checkBody,
  containerLinkBody,
  folderBody,
  linkBody,
} from "./type.body";

const path = "/unrestrict";

const Unrestrict = {
  check: (body: checkBody) => Api.get(path + "/check"),
  link: (body: linkBody) => Api.post(path + "/link", body),
  folder: (body: folderBody) => Api.post(path + "/folder", body),
  containerFile: (file: File) => Api.put(path + "/containerFile", file),
  containerLink: (body: containerLinkBody) =>
    Api.post(path + "/containerLink", body),
};

export default Unrestrict;
