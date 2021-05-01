import { response } from "../api";

export type download = {
  id: string;
  filename: string;
  mimeType: string;
  filesize: number;
  link: string;
  host: string;
  host_icon: string;
  chunks: number;
  download: string;
  streamable: number;
  generated: string;
};
export type downloadsData = download[];

export type downloads = response<downloadsData>;

export type deleteId = response<unknown>;
