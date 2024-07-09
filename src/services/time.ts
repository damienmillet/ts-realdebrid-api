import { ApiResponse } from "../types";
import { fetchAPI } from "../utils/fetcher";

const path = "time";

export type time = {};

export async function get(): Promise<ApiResponse<time>> {
  return fetchAPI(path);
}

export async function getIso(): Promise<ApiResponse<time>> {
  return fetchAPI(path + "/iso");
}
