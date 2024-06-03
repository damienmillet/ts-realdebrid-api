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
  link: (body: linkBody) => {
    const form = new FormData();
    form.append("link", body.link);
    return Api.post<link>(path + "/link", form);
  },
  folder: (body: folderBody) => {
    const form = new FormData();
    form.append("link", body.link);
    return Api.post<folder>(path + "/folder", form);
  },
  containerFile: (file: File) =>
    Api.put<containerFile>(path + "/containerFile", file),
  containerLink: (body: containerLinkBody) => {
    const form = new FormData();
    form.append("link", body.link);
    form.append("password", body.password);
    return Api.post<containerLink>(path + "/containerLink", form);
  },
};

export default Unrestrict;
