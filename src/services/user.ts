import { ApiResponse } from "../types";
import { fetchAPI } from "../utils/fetcher";

const apiPath = "user";

export type user = {
  id: number;
  username: string;
  email: string;
  points: number; // Fidelity points
  locale: string; // User language
  avatar: string; // URL
  type: string; // "premium" or "free"
  premium: number; // seconds left as a Premium user
  expiration: string; // jsonDate
};

export async function get(): Promise<ApiResponse<user>> {
  return fetchAPI(apiPath);
}
