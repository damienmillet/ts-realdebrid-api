export type torrentsParams = {
  offset?: string | string[] | number; // Starting offset (must be within 0 and X-Total-Count HTTP header)
  page?: string | string[] | number; // Pagination system
  limit?: string | string[] | number; // Entries returned per page / request (must be within 0 and 100, default: 50)
  filter?: string | string[] | string; // "active", list active torrents first
};

export type addTorrentParams = {
  get?: string;
};
