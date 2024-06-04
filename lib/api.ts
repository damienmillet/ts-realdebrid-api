import ApiError from "./error";
import { response } from "./types";

class Api {
  baseUrl = "https://api.real-debrid.com/rest/1.0";
  headers = {
    Authorization: `Bearer ${process.env.REALDEBRID_API}`,
    accept: "application/json",
  };

  queryUrl(uri: string, params?: any): string {
    const url = new URL(this.baseUrl + uri);
    if (params) url.search = new URLSearchParams(params).toString();
    return url.toString();
  }
  async fetch(
    url: string,
    options?: RequestInit,
  ) {
    const res = await fetch(url, { ...options, headers: this.headers });
    const data = async () => {
      if (!res.bodyUsed) return undefined;
      // if url/time return text()
      if (res.url.includes("time") || res.url.includes("time/iso")) {
        return await res.text();
      }
      if (res.headers.get("Content-Type")?.includes("application/json")) {
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
    options?: RequestInit,
  ) {
    return this.fetch(this.queryUrl(url, params), options) as Promise<
      response<T>
    >;
  }
  post<T = unknown>(
    url: string,
    body: BodyInit,
    params?: any,
    options?: RequestInit,
  ) {
    return this.fetch(this.queryUrl(url, params), {
      ...options,
      method: "POST",
      body,
    }) as Promise<response<T>>;
  }
  put<T = unknown>(
    url: string,
    body: any,
    params?: any,
    options?: RequestInit,
  ) {
    return this.fetch(this.queryUrl(url, params), {
      ...options,
      method: "PUT",
      body: body,
    }) as Promise<response<T>>;
  }
  delete<T = unknown>(url: string, params?: any, options?: RequestInit) {
    return this.fetch(this.queryUrl(url, params), {
      ...options,
      method: "DELETE",
    }) as Promise<response<T>>;
  }
}

export default new Api();
