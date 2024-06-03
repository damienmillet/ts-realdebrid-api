import { response } from "../api";

export type download = {
  id: string;
  filename: string;
  mimeType: string;
  filesize: number;
  link: string;
  host: string;
  host_icon: string;
  type?: string;
  chunks: number;
  download: string;
  streamable: number;
  generated: string;
};

export type deleteId = response<unknown>;
