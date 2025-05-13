export function parseQueryParams(url: string) {
  const queryString = url.split('?')[1];
  const params = new URLSearchParams(queryString);

  return {
    accessToken: params.get('access_token'),
    refreshToken: params.get('refresh_token'),
  };
}
