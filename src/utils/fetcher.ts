import { getErrorMessage } from "./errorHandler";

export async function fetchAPI(
  path: string,
  options: RequestInit = {},
): Promise<any> {
  const url = new URL("https://api.real-debrid.com/rest/1.0/" + path);

  console.log("fetchAPI", url.toString());

  options.headers = {
    ...options?.headers,
    Authorization: `Bearer ${process.env.REALDEBRID_API}`,
    accept: "application/json",
  };

  console.log(
    "fetchAPI",
    fetch(url.toString(), {
      ...options,
      cache: "no-cache",
    }),
  );

  const response = await fetch(url.toString(), {
    ...options,
    cache: "no-cache",
  });

  console.log("fetchAPI", response);

  if (!response.ok) {
    return {
      success: false,
      error: { code: response.status, message: response.statusText },
    };
  }

  const data = await response.json();

  if (!data.success) {
    const errorMessage = getErrorMessage(path, data.error_code);
    return {
      success: false,
      error: { code: data.error_code, message: errorMessage },
    };
  }

  return { success: true, ...(data.data && { data: data.data }) };
}
