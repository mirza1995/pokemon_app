export const AUTH_TOKEN = 'authToken';

//Function which manually takes specific cookie which can be used without hooks
export function getCookie(cookieName: string) {
  const name = cookieName + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieString = decodedCookie.split(';');

  for (let i = 0; i < cookieString.length; i++) {
    let char = cookieString[i];
    while (char.charAt(0) == ' ') {
      char = char.substring(1);
    }

    if (char.indexOf(name) == 0) {
      return char.substring(name.length, char.length);
    }
  }

  return '';
}
