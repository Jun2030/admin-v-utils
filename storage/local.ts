import { decrypt, encrypt } from '../crypto';

interface StorageData {
  value: unknown;
  expire: number | null;
}

/**
 * @description  :localStorage存储-删
 * @param         {string} key Key值
 * @return        {void}
 */
export const removeLocal = (key: string): void => {
  localStorage.removeItem(key);
};

/**
 * @description  :localStorage存储-清空所有
 * @return        {void}
 */
export const clearLocal = (): void => {
  localStorage.clear();
};

/* 默认缓存时间：7天 */
const DEFAULT_CACHE_TIME = 1000 * 60 * 60 * 24 * 7;

/**
 * @description  :localStorage存储-存
 * @param         {string} key Key值
 * @param         {unknown} value Value值
 * @param         {number} expire 过期时间（毫秒），默认7天
 * @return        {void}
 */
export const setLocal = (key: string, value: unknown, expire: number | null = DEFAULT_CACHE_TIME): void => {
  const storageData: StorageData = { value, expire: expire ? Date.now() + expire : null };
  const json = encrypt(storageData);
  localStorage.setItem(key, json);
};

/**
 * @description  :localStorage存储-取
 * @param         {string} key Key值
 * @return        {*} 返回值
 */
export const getLocal = <T> (key: string): T | null => {
  const json: string | null = localStorage.getItem(key);
  if (json) {
    const storageData: StorageData | null = decrypt(json);
    if (storageData) {
      if (storageData.expire && storageData.expire >= Date.now())
        return storageData.value as T;
    }
    removeLocal(key);
    return null;
  }
  return null;
};
