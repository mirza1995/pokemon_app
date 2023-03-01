import { AUTH_TOKEN, getCookie } from '@utils/cookies';

type HeadersProps = {
  Authorization?: string;
  'Content-Type'?: string;
};

type Request = {
  method: string;
  headers: HeadersProps;
  body?: string;
};

function getHeaders() {
  const headers: HeadersProps = {};
  const authToken = getCookie(AUTH_TOKEN);
  if (authToken) {
    headers['Authorization'] = authToken;
  }

  return headers;
}

export async function get(url: string) {
  return sendRequest(url, 'GET');
}

export async function post(url: string, data: unknown) {
  return sendRequest(url, 'POST', data);
}

export async function deleteReq(url: string, data: unknown) {
  return sendRequest(url, 'DELETE', data);
}

async function sendRequest(url: string, method: string, data?: unknown) {
  const requestInfo: Request = {
    method: method,
    headers: {
      ...getHeaders(),
      'Content-Type': 'application/json'
    }
  };

  if (data) {
    requestInfo.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, requestInfo);

    return response.json();
  } catch {
    throw new Error(`${method} request failed.`);
  }
}
