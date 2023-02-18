export function isValidEmail(email: string | undefined) {
  return email && /\S+@\S+\.\S+/.test(email);
}

export function isValidPassword(password: string | undefined) {
  return password && password.length > 5;
}
