import Api, { RdResponse } from "../api";
import { convertPoints, convertPointsData } from "./type.return";

const path = "/settings";

const Settings = Api && {
  convertPoints: () =>
    fetch(
      Api.queryUrl(path + "/convertPoints", {
        method: "POST",
        headers: Api.headers,
      })
    )
      .then((res) => Api.responseEngine(res))
      .then((res: RdResponse) => res.json())
      .then((res: convertPointsData) => ({
        data: res,
        success: Api.success,
        error: Api.error,
        counter: Api.counter,
      }))
      .then((res: convertPoints) => res),
};

export default Settings;
