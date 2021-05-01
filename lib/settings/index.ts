import Api from "../api";
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
      .then((res: Response) => res.json())
      .then(
        (res: convertPointsData) => ({
          data: res,
          success: Api.success,
          error: Api.error,
        }),
        () => ({ success: Api.success, error: Api.error })
      )
      .then((res: convertPoints) => res),
};

export default Settings;
