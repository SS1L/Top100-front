export default function authHeader() {
  const token = JSON.parse(localStorage.getItem('accessToken'));
  if (token) {
    return { 'x-access-token': token.accessToken };
  }
  return null;
}
