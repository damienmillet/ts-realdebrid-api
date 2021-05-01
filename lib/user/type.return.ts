import { response } from "../api";

export type userData = {
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

export type user = response<userData>;
