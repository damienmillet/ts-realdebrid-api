import { response } from "../api";

export type checkData = {
  host: string; // Host main domain
  link: string;
  filename: string;
  filesize: number;
  supported: number;
};

export type linkAlterData = {
  id: string;
  filename: string;
  download: string;
  type: string;
};

export type linkData = {
  id: string;
  filename: string;
  mimeType: string; // Mime Type of the file, guessed by the file extension
  filesize: number; // Filesize in bytes, 0 if unknown
  link: string; // Original link
  host: string; // Host main domain
  chunks: number; // Max Chunks allowed
  crc: number; // Disable / enable CRC check
  download: string; // Generated link
  streamable: number; // Is the file streamable on website
  type: string; // Type of the file (in general, its quality)
  alternative: linkAlter[];
};

export type folderData = string[];
export type containerFileData = string[];
export type containerLinkData = string[];

export type check = response<checkData>;
export type linkAlter = response<linkAlterData>;
export type link = response<linkData>;
export type folder = response<folderData>;
export type containerFile = response<containerFileData>;
export type containerLink = response<containerLinkData>;
