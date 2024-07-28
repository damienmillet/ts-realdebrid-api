export async function fetchAPI(
  path: string,
  options: RequestInit = {},
): Promise<any> {
  try {
    const url = new URL(`https://api.real-debrid.com/rest/1.0/${path}`);

    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${process.env.REALDEBRID_API}`,
      accept: "application/json",
    };

    const response = await fetch(url.toString(), {
      ...options,
      cache: "no-cache",
    });

    if (!response.ok) return handleError(response.statusText, response.status);

    if (response.status === 204) {
      return handleSuccess(undefined, 204);
    }

    if (response.url.includes("time") || response.url.includes("time/iso")) {
      const time = await response.text();
      return handleSuccess(time);
    }

    const data = await response.json();
    const { error_code, error } = data;

    if (error_code || error) {
      return { success: false, error: { code: error_code, message: error } };
    }

    return { success: true, ...(data && { data: data }) };
  } catch (error) {
    if (error instanceof Error) {
      return handleError(error.message);
    }
  }
}

export function handleError(message: string, code = 500) {
  return Response.json({ success: false, error: { code, message } }, {
    status: code,
  });
}

export function handleSuccess(data?: any, code = 200) {
  return Response.json({ success: true, ...(data && { data: data }) }, {
    status: code,
  });
}
