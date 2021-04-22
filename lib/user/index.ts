import Api from "../api";
import { user } from "./type.return";

const path = "/user";

const User = Api && {
  get: () =>
    fetch(Api.queryUrl(path), { headers: Api.headers })
      .then((res) => res.json())
      .then((res: user) => res),
};

export default User;
