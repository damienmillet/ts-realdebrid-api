import Api from "../api";

const path = "/time";

const Time = {
  get: () => Api.get(path),
  getIso: () => Api.get(path + `/iso`),
};

export default Time;
