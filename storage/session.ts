import { decrypt, encrypt } from '../crypto';

/**
 * @description  :sessionStorage存储-删
 * @param         {string} key Key值
 * @return        {void}
 */
export const removeSession = (key: string): void => {
  sessionStorage.removeItem(key);
};

/**
 * @description  :sessionStorage存储-清空所有
 * @return        {void}
 */
export const clearSession = (): void => {
  sessionStorage.clear();
};

/**
 * @description  :sessionStorage存储-存
 * @param         {string} key Key值
 * @param         {unknown} value Value值
 * @return        {void}
 */
export const setSession = (key: string, value: unknown): void => {
  const json: string = encrypt(value);
  sessionStorage.setItem(key, json);
};

/**
 * @description  :sessionStorage存储-取
 * @param         {string} key Key值
 * @return        {*} 返回值
 */
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

