export function generateRandomString(length: number = 6): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  let result = '';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return result;
}

export function generateRandomNumber(
  min: number = 1,
  max: number = 1000
): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomEmail(): string {
  return `test_${Date.now()}@example.com`;
}