export type response<T> = {
  data?: T;
  success: boolean;
  error?: {
    info: Record<string, unknown>;
    statusText: string;
    status: number;
  };
};

type api = {
  baseUrl: string;
  headers: Headers;
  success?: boolean;
  queryUrl: CallableFunction;
  fetch: <T = unknown>(
    url: string,
    options: RequestInit,
  ) => Promise<response<T>>;
  get: CallableFunction;
  post: CallableFunction;
  put: CallableFunction;
  delete: CallableFunction;
};

class CustomError {
  declare info: Record<string, unknown>;
  declare statusText: string;
  declare status: number;
  declare private res: Response;

  constructor(res: Response) {
    this.statusText = res.statusText;
    this.status = res.status;
    this.res = res;
  }
  async handleError() {
    if (this.res.headers.get("content-type")?.includes("application/json")) {
      this.info = await this.res.json();
      return this;
    }
  }
}

const Api: api = {
  baseUrl: "https://api.real-debrid.com/rest/1.0",
  headers: new Headers({
    Authorization: `Bearer ${process.env.REALDEBRID_API}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  }),
  queryUrl: (
    uri: string,
    params?: {},
  ) => {
    const url = new URL(Api.baseUrl + uri);
    if (params) url.search = new URLSearchParams(params).toString();
    return url.toString();
  },
  fetch: async (
    url: string,
    options: RequestInit,
  ) => {
    options.headers = { ...Api.headers, ...options.headers };
    const res = await fetch(url, options);
    console.log(res);

    const data = async () => {
      // if url/time return text()
      if (res.url.includes("time") || res.url.includes("time/iso")) {
        return await res.text();
      }
      if (res.headers.get("content-type")?.includes("application/json")) {
        return await res.json();
      }
      return res;
    };

    const error = !res.ok
      ? await (new CustomError(res)).handleError()
      : undefined;

    return {
      success: res.ok,
      data: await data(),
      error: error,
    };
  },
  async get<T = unknown>(
    url: string,
    params?: Record<string, string | number | string[]>,
  ) {
    // Api.queryUrl(url, params)
    return await Api.fetch<T>(url, {
      method: "GET",
    }) as response<T>;
  },
  async post(url: string, body: any) {
    return await Api.fetch(Api.queryUrl(url), {
      method: "POST",
      body: JSON.stringify(body),
    });
  },
  async put(url: string, body: any) {
    return await Api.fetch(Api.queryUrl(url), {
      method: "PUT",
      body: JSON.stringify(body),
    });
  },
  async delete(url: string) {
    return await Api.fetch(Api.queryUrl(url), {
      method: "DELETE",
    });
  },
};
export default Api;
