import Api from "../api";
import { user } from "../types";

const path = "/user";

const User = {
  get: () => Api.get<user>(path),
};

export default User;
