import Api, { RdResponse } from "../api";
import { user, userData } from "./type.return";

const path = "/user";

const User = Api && {
  get: () =>
    fetch(Api.queryUrl(path), { headers: Api.headers })
      .then((res) => Api.responseEngine(res))
      .then((res: RdResponse) => res.json())
      .then(
        (res: userData) => ({
          data: res,
          success: Api.success,
          error: Api.error,
        }),
        () => ({ success: Api.success, error: Api.error })
      )
      .then((res: user) => res),
};

export default User;
