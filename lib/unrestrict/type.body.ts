export type checkBody = {
  link: string;
  password?: string;
};

export type containerLinkBody = {
  link: string;
};

export type folderBody = {
  link: string;
};

export type linkBody = {
  link: string; //The original hoster link
  password?: string; //Password to unlock the file access hoster side
  remote?: string;
};
