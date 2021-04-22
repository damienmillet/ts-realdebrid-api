import { stringify } from "querystring";

const Api = {
  baseUrl: "https://api.real-debrid.com/rest/1.0",
  headers: new Headers({
    Authorization: `Bearer ${process.env.REALDEBRID_API}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  }),
  queryUrl: (uri: string, params?: {}) => {
    const url = new URL(Api.baseUrl + uri);
    params && (url.search = new URLSearchParams(stringify(params)).toString());
    return url.toString();
  },
};
export default Api;
