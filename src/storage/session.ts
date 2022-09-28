import { decrypt, encrypt } from '../crypto';

/* sessionStorage存储-删 */
export const removeSession = (key: string): void => {
  sessionStorage.removeItem(key);
};

/* sessionStorage存储-清空所有 */
export const clearSession = (): void => {
  sessionStorage.clear();
};

/* sessionStorage存储-存 */
export const setSession = (key: string, value: unknown) => {
  const json: string = encrypt(value);
  sessionStorage.setItem(key, json);
};

/* sessionStorage存储-取 */
export const getSession = <T>(key: string): T | null => {
  const json: string | null = sessionStorage.getItem(key);
  if (json) {
    const value: T | null = decrypt(json);
    if (value) return value;
    removeSession(key);
    return null;
  }
  return null;
};

