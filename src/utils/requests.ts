// Extends the error class to throw HTTP Errors (any response with status > 299)
class HTTPError extends Error {}

//            A generic type to type the response
// -----------\/
const query = <T = unknown>(url: RequestInfo | URL, init?: RequestInit) =>
  fetch(url, init).then((res) => {
    if (!res.ok)
      throw new HTTPError(res.statusText, { cause: res })

    return res.json() as Promise<T> // <--- Applying the generic type above
  }) 