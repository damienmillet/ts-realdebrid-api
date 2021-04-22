import Api from "../api";
import { convertPoints } from "./type.return";

const path = "/settings";

const Settings = Api && {
  convertPoints: () =>
    fetch(
      Api.queryUrl(path + "/convertPoints", {
        method: "POST",
        headers: Api.headers,
      })
    )
      .then((res) => res.json())
      .then((res: convertPoints) => res),
};

export default Settings;
