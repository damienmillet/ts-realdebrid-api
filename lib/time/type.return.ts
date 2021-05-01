import { response } from "../api";

export type timeData = { time: Promise<string> };
export type timeIsoData = { time: Promise<string> };

export type time = response<timeData>;
export type timeIso = response<timeIsoData>;
