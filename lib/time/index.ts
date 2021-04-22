import Api from "../api";
import { time, timeIso } from "./type.return";

const path = "/time";

const Time = Api && {
  get: () =>
    fetch(Api.queryUrl(path))
      .then((res) => res.text())
      .then((res) => <time>{ time: res }),
  getIso: () =>
    fetch(Api.queryUrl(path + `/iso`))
      .then((res) => res.text())
      .then((res) => <timeIso>{ time: res }),
};

export default Time;
