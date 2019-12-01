import qs from 'qs';

const baseURL = '/api';

export const baseConfiguration = {
  baseURL,
  headers: {
    common: {
      'Access-Control-Allow-Credentials': true,
      'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
      'Content-Type': 'application/json',
      Pragma: 'no-cache',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
    },
  },
  paramsSerializer: params => qs.stringify(params, { indices: false }),
  timeout: 30000,
  withCredentials: true,
};
