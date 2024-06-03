import Api from "../api";

const path = "/time";

const Time = {
  get: () => Api.get<string>(path),
  getIso: () => Api.get<string>(path + `/iso`),
};

export default Time;
