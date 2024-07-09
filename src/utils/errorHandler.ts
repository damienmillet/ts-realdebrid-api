const errorMessages: Record<string, { code: number; message: string }[]> = {
  "COMMON": [
    { code: -1, message: "Internal error" },
    { code: 1, message: "Missing parameter" },
    { code: 2, message: "Bad parameter value" },
    { code: 3, message: "Unknown method" },
    { code: 4, message: "Method not allowed" },
    { code: 5, message: "Slow down" },
    { code: 6, message: "Resource unreachable" },
    { code: 7, message: "Resource not found" },
    { code: 8, message: "Bad token" },
    { code: 9, message: "Permission denied" },
    { code: 10, message: "Two-Factor authentication needed" },
    { code: 11, message: "Two-Factor authentication pending" },
    { code: 12, message: "Invalid login" },
    { code: 13, message: "Invalid password" },
    { code: 14, message: "Account locked" },
    { code: 15, message: "Account not activated" },
    { code: 16, message: "Unsupported hoster" },
    { code: 17, message: "Hoster in maintenance" },
    { code: 18, message: "Hoster limit reached" },
    { code: 19, message: "Hoster temporarily unavailable" },
    { code: 20, message: "Hoster not available for free users" },
    { code: 21, message: "Too many active downloads" },
    { code: 22, message: "IP Address not allowed" },
    { code: 23, message: "Traffic exhausted" },
    { code: 24, message: "File unavailable" },
    { code: 25, message: "Service unavailable" },
    { code: 26, message: "Upload too big" },
    { code: 27, message: "Upload error" },
    { code: 28, message: "File not allowed" },
    { code: 29, message: "Torrent too big" },
    { code: 30, message: "Torrent file invalid" },
    { code: 31, message: "Action already done" },
    { code: 32, message: "Image resolution error" },
    { code: 33, message: "Torrent already active" },
    { code: 34, message: "Too many requests" },
    { code: 35, message: "Infringing file" },
    { code: 36, message: "Fair Usage Limit" },
    { code: 401, message: "Bad token (expired, invalid)" },
    { code: 403, message: "Permission denied (account locked)" },
    { code: 503, message: "Service unavailable (not enough points)" },
  ],
};

export function getErrorMessage(
  path: string,
  code: number,
): string {
  const pathErrors = errorMessages[path];
  if (pathErrors) {
    if (pathErrors) {
      const error = pathErrors.find((err) => err.code === code);
      if (error) {
        return error.message;
      }
      const commonErrors = errorMessages["COMMON"];
      const commonError = commonErrors.find((err) => err.code === code);
      if (commonError) return commonError.message;
    }
  }
  return "Unknown error";
}
