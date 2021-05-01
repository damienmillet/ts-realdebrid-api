import Api, { RdResponse } from "../api";
import { time, timeData, timeIso, timeIsoData } from "./type.return";

const path = "/time";

const Time = Api && {
  get: () =>
    fetch(Api.queryUrl(path))
      .then((res) => Api.responseEngine(res))
      .then((res: RdResponse) => ({ time: res.text() }))
      .then((res: timeData) => ({
        data: res,
        success: Api.success,
        error: Api.error,
      }))
      .then((res: time) => res),
  getIso: () =>
    fetch(Api.queryUrl(path + `/iso`))
      .then((res) => Api.responseEngine(res))
      .then((res: RdResponse) => ({ time: res.text() }))
      .then((res: timeIsoData) => ({
        data: res,
        success: Api.success,
        error: Api.error,
      }))
      .then((res: timeIso) => res),
};

export default Time;
