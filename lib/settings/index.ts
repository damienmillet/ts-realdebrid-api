import Api from "../api";
import { convertPoints } from "./type.return";

const path = "/settings";

const Settings = {
  convertPoints: () => Api.get<convertPoints>(path + "/convertPoints"),
};

export default Settings;
