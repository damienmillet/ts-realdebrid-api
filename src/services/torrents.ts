import { ApiResponse } from "../types";
import { fetchAPI } from "../utils/fetcher";

const path = "torrents";

export type torrents = {
  id: string;
  filename: string;
  hash: string; // SHA1 Hash of the torrent
  bytes: number; // Size of selected files only
  host: string; // Host main domain
  split: number; // Split size of links
  progress: number; // Possible values: 0 to 100
  status: string; // Current status of the torrent: magnet_error, magnet_conversion, waiting_files_selection, queued, downloading, downloaded, error, virus, compressing, uploading, dead
  added: string; // jsonDate
  links: [
    string, // Host URL
  ];
  ended?: string; // !! Only present when finished, jsonDate
  speed?: number; // !! Only present in downloading, compressing, uploading status
  seeders?: number; // !! Only present in downloading, magnet_conversion status
}[];

/**
 * @param options.offset Starting offset (must be within 0 and X-Total-Count HTTP header)
 * @param options.page Pagination system
 * @param options.limit Entries returned per page / request (must be within 0 and 5000, default: 100)
 * @param options.filter "active", list active torrents only
 * @returns
 */
export async function get(
  options?: { offset?: number; page?: number; limit?: number; filter?: string },
): Promise<ApiResponse<torrents>> {
  return fetchAPI(path);
}

export async function info(id: string): Promise<ApiResponse> {
  return fetchAPI(path + "/info/" + id);
}

export async function instantAvailability(hash: string): Promise<ApiResponse> {
  return fetchAPI(path + "/instantAvailability/" + hash);
}

export async function activeCount(): Promise<ApiResponse> {
  return fetchAPI(path + "/activeCount");
}

export async function availableHosts(): Promise<ApiResponse> {
  return fetchAPI(path + "/availableHosts");
}

// addTorrent: (params: addTorrentParams, body: addTorrentBody) =>
//   Api.put<string>(
//     Api.queryUrl(path + "/addTorrent", params),
//     body,
//   ),

export async function addTorrent(id: string): Promise<ApiResponse> {
  return fetchAPI(path + "/addTorrent/" + id, { method: "PUT" });
}

export async function addMagnet(magnet: string): Promise<ApiResponse> {
  const form = new FormData();
  form.append("magnet", magnet);
  return fetchAPI(path + "/addMagnet", {
    method: "POST",
    body: form,
  });
}

export async function selectFiles(id: string): Promise<ApiResponse> {
  return fetchAPI(path + "/selectFiles/" + id, { method: "POST" });
}

// selectFiles: async (id: string, files: string[]) => {
//   const body = new FormData();
//   if (files.length > 1) body.append("files", files.join(","));
//   else body.append("files", files[0]);
//   return await Api.post<files>(path + "/selectFiles/" + id, body);
// },

export async function remove(id: string): Promise<ApiResponse> {
  return fetchAPI(path + "/delete/" + id, { method: "DELETE" });
}
