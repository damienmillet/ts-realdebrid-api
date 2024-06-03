import { get } from "http";
import Api from "../api";
import { convertPoints, convertPointsData } from "./type.return";

const path = "/settings";

const Settings = {
  convertPoints: () =>
    Api.get(path + "/convertPoints") as Promise<convertPointsData>,
};

export default Settings;
