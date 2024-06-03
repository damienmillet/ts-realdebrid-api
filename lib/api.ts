import ApiError from "./error";
import { response } from "./types";

class Api {
  baseUrl = "https://api.real-debrid.com/rest/1.0";
  headers = new Headers({
    Authorization: `Bearer ${process.env.REALDEBRID_API}`,
    Accept: "application/json",
    "content-type": "application/json",
  });

  queryUrl(uri: string, params?: any): string {
    const url = new URL(this.baseUrl + uri);
    if (params) url.search = new URLSearchParams(params).toString();
    return url.toString();
  }
  async fetch(
    url: string,
    options?: RequestInit,
  ) {
    options = { ...{ headers: this.headers }, ...options };
    console.log(options);
    const req = fetch(url, options);
    const res = await req;
    console.log(req, res);

    const data = async () => {
      if (!res.bodyUsed) return undefined;
      // if url/time return text()
      if (res.url.includes("time") || res.url.includes("time/iso")) {
        return await res.text();
      }
      console.log(res.headers);
      if (res.headers.get("content-type")?.includes("application/json")) {
        return await res.json();
      }
      return res;
    };

    const error = !res.ok ? await (new ApiError(res)).handleError() : undefined;

    return {
      success: res.ok,
      data: await data(),
      error: error,
    };
  }
  get<T = unknown>(
    url: string,
    params?: any,
  ) {
    return this.fetch(this.queryUrl(url, params)) as Promise<response<T>>;
  }
  post<T = unknown>(url: string, body: BodyInit, options: RequestInit = {}) {
    const headersObj = Object.fromEntries(this.headers.entries());
    // Overwrite headers with options if options.headers is set
    options = options.headers
      ? { ...options, headers: { ...headersObj, ...options.headers } }
      : { ...options, headers: { ...headersObj } };
    // Convert Headers instance to plain object

    options.body = body;
    options.method = "POST";
    return this.fetch(this.queryUrl(url), options) as Promise<response<T>>;
  }
  put<T = unknown>(url: string, body: any) {
    return this.fetch(this.queryUrl(url), {
      method: "PUT",
      body: JSON.stringify(body),
    }) as Promise<response<T>>;
  }
  delete<T = unknown>(url: string) {
    return this.fetch(this.queryUrl(url), {
      method: "DELETE",
    }) as Promise<response<T>>;
  }
}

export default new Api();
