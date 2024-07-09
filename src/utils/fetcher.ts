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

  const data = await response.json();

  if (data.error_code || data.error) {
    return {
      success: false,
      error: { code: data.error_code, message: data.error },
    };
  }

  return { success: true, ...(data && { data: data }) };
}
