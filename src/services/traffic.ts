import { ApiResponse } from "../types";
import { fetchAPI } from "../utils/fetcher";

const path = "traffic";

export type traffic = string;

export async function get(): Promise<ApiResponse<traffic>> {
  return fetchAPI(path);
}

export async function details(): Promise<ApiResponse> {
  return fetchAPI(path + "/details");
}
