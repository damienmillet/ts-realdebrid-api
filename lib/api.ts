import { stringify } from "querystring";

export type response<T> = {
  data?: T;
  success?: boolean;
  error?: {
    code?: number;
    message?: string;
  };
};

type api = {
  baseUrl: string;
  headers: Headers;
  success?: boolean;
  error?: {
    code?: number;
    message?: string;
  };
  queryUrl: CallableFunction;
  responseEngine: CallableFunction;
};

const Api: api = {
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
  responseEngine: (res: Response) => {
    Api.success = res.ok;
    Api.error =
      res.status <= 200 && res.status > 300
        ? {
            code: res.status,
            message: res.statusText,
          }
        : undefined;
    return res;
  },
};
export default Api;
