interface ApiClientProps {
  url: string
  method: string
  body?: string
  headers?: Record<string, string>
  token?: string
}

export const apiFetch = async ({url, method, body, headers = {}}: ApiClientProps) => {
  if (!headers['Content-Type']) {
    headers['Content-Type'] = 'application/json'
  }

  const response = await fetch(`${url}`, {
    method,
    body,
    headers: {
      ...headers
    }
  })

  if (!response.ok) {
    throw new Error(`Request failed: ${response.statusText}`)
  }

  return response.json()
}