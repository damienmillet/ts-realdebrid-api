export type activeCount = {
  nb: number; // Number of currently active torrents
  limit: number; // Maximum number of active torrents you can have
};
export type files = {
  id: number;
  path: string; // Path to the file inside the torrent, starting with "/"
  bytes: number;
  selected: number; // 0 or 1
};
export type torrent = {
  id: string;
  filename: string;
  hash: string; // SHA1 Hash of the torrent
  bytes: number; // Size of selected files only
  host: string; // Host main domain
  split: number; // Split size of links
  progress: number; // Possible values: 0 to 100
  status: string; // Current status of the torrent: magnet_error, magnet_conversion, waiting_files_selection, queued, downloading, downloaded, error, virus, compressing, uploading, dead
  added: string; // jsonDate
  links: string[];
  files: files[];
  ended: string; // !! Only present when finished, jsonDate
  speed: number; // !! Only present in "downloading", "compressing", "uploading" status
  seeders: number; // !! Only present in "downloading", "magnet_conversion" status
};
export type torrents = torrent[];

export type availableHosts = {
  host: string; // Host main domain
  max_file_size: number; // Max split size possible
};
export type addTorrent = {
  id: string;
  uri: string; // URL of the created ressource
};
