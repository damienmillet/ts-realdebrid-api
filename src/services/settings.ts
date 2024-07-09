import { ApiResponse } from "../types";
import { fetchAPI } from "../utils/fetcher";

const path = "settings";

export type time = string;

export type settings = {
  download_ports: string[]; // Possible "download_port" value to update settings
  download_port: string; // Current user download port
  locales: Record<string, string>; // Possible "locale" value to update settings
  locale: string; // Current user locale
  streaming_qualities: string[]; // Possible "streaming_quality" value to update settings
  streaming_quality: string; // Current user streaming quality
  mobile_streaming_quality: string; // Current user streaming quality on mobile devices
  streaming_languages: Record<string, string>; // Possible "streaming_language_preference" value to update settings
  streaming_language_preference: string; // Current user streaming language preference
  streaming_cast_audio: string[]; // Possible "streaming_cast_audio_preference" value to update settings
  streaming_cast_audio_preference: string; // Current user audio preference on Google Cast devices
};

export async function get(): Promise<ApiResponse<settings>> {
  return fetchAPI(path);
}

/**
 * @param setting_name "download_port", "locale", "streaming_language_preference", "streaming_quality", "mobile_streaming_quality", "streaming_cast_audio_preference"
 * @param setting_value Possible values are available in /settings
 * @returns
 */
export async function update(
  setting_name: string,
  setting_value: string,
): Promise<ApiResponse> {
  return fetchAPI(path + "/update", { method: "POST" });
}

export async function convertPoints(): Promise<ApiResponse> {
  return fetchAPI(path + "/convertPoints", { method: "POST" });
}

export async function changePassword(): Promise<ApiResponse> {
  return fetchAPI(path + "/changePassword", { method: "POST" });
}

export async function avatar(): Promise<ApiResponse> {
  return fetchAPI(path + "/avatarFile", { method: "PUT" });
}

export async function avatarDelete(): Promise<ApiResponse> {
  return fetchAPI(path + "/avatarFile", { method: "DELETE" });
}
