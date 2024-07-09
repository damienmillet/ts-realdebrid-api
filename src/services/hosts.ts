import { ApiResponse } from "../types";
import { fetchAPI } from "../utils/fetcher";

const path = "hosts";

export type time = string;

export type hosts = {
  [key: string]: { // Host main domain
    id: string;
    name: string;
    image: string; // URL
  };
};

export async function get(): Promise<ApiResponse<hosts>> {
  return fetchAPI(path);
}

export async function status(): Promise<ApiResponse> {
  return fetchAPI(path + "/status");
}

export async function regex(): Promise<ApiResponse> {
  return fetchAPI(path + "/regex");
}

export async function regexFolder(): Promise<ApiResponse> {
  return fetchAPI(path + "/regexFolder");
}

export async function domains(): Promise<ApiResponse> {
  return fetchAPI(path + "/domains");
}
