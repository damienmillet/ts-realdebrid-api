import { getErrorMessage } from "./errorHandler";

export async function fetchAPI(
  path: string,
  options: RequestInit = {},
): Promise<any> {
  const url = new URL("https://api.real-debrid.com/rest/1.0/" + path);

  options.headers = {
    ...options?.headers,
    Authorization: `Bearer ${process.env.REALDEBRID_API}`,
    accept: "application/json",
  };

  console.log(options.headers);

  const response = await fetch(url.toString(), {
    ...options,
    cache: "no-cache",
  });

  if (!response.ok) {
    return {
      success: false,
      error: { code: response.status, message: response.statusText },
    };
  }

  console.log("ok", response.ok);

  const data = await response.json();

  console.log("data", data);

  if (!data.success) {
    const errorMessage = getErrorMessage(path, data.error_code);
    console.log("error", errorMessage);
    return {
      success: false,
      error: { code: data.error_code, message: errorMessage },
    };
  }

  return { success: true, ...(data.data && { data: data.data }) };
}
