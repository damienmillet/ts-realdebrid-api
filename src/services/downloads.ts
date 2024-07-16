import { ApiResponse } from "../types";
import { fetchAPI } from "../utils/fetcher";

const path = "downloads";

export type download = {
  id: string;
  filename: string;
  mimeType: string; // Mime Type of the file, guessed by the file extension
  filesize: number; // bytes, 0 if unknown
  link: string; // Original link
  host: string; // Host main domain
  chunks: number; // Max Chunks allowed
  download: string; // Generated link
  generated: string; // jsonDate
};
export type downloads = download[];

/**
 * @param options.offset Starting offset (must be within 0 and X-Total-Count HTTP header)
 * @param options.page Pagination system
 * @param options.limit Entries returned per page / request (must be within 0 and 5000, default: 100)
 * @returns List of downloads
 */
export async function get(
  options?: { offset?: number; page?: number; limit?: number },
): Promise<ApiResponse<downloads>> {
  return fetchAPI(path);
}

export async function remove(id: string): Promise<ApiResponse> {
  return fetchAPI(path + "/delete/" + id, { method: "DELETE" });
}
