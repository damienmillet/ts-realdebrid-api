import { ApiResponse } from "../types";
import { fetchAPI } from "../utils/fetcher";

const path = "unrestrict";

export type check = {
  host: string; // Host main domain
  link: string;
  filename: string;
  filesize: number;
  supported: number;
};

/**
 * @param link The original hoster link
 * @param password Password to unlock the file access hoster side
 * @returns
 */
export async function check(
  link: string,
  password?: string,
): Promise<ApiResponse<check>> {
  return fetchAPI(path + "/check", { method: "POST" });
}

export async function link(): Promise<ApiResponse> {
  return fetchAPI(path + "/link", { method: "POST" });
}

export async function folder(): Promise<ApiResponse> {
  return fetchAPI(path + "/link", { method: "POST" });
}

export async function containerLink(link: string): Promise<ApiResponse> {
  if (!link) fetchAPI(path + "/containerFolder", { method: "PUT" });
  return fetchAPI(path + "/containerLink", { method: "POST" });
}
