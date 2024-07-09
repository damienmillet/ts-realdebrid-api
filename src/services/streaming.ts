import { ApiResponse } from "../types";
import { fetchAPI } from "../utils/fetcher";

const path = "streaming";

export type transcode = {
  [key: string]: Record<"quality", string>;
};

export async function transcode(id: string): Promise<ApiResponse<transcode>> {
  return fetchAPI(path + "/transcode/" + id);
}

export async function mediaInfos(id: string): Promise<ApiResponse> {
  return fetchAPI(path + "/mediaInfos/" + id);
}
