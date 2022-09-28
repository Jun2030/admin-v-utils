import CryptoJS from 'crypto-js';

const CryptoSecret = '__SimpleCryptoSecret__';

/**
 * @description  :AES加密数据
 * @param         {unknown} data 加密数据
 * @return        {*} 加密值
 */
export const encrypt = (data: unknown): string => {
  const encryptData: string = JSON.stringify(data);
  return CryptoJS.AES.encrypt(encryptData, CryptoSecret).toString();
};

/**
 * @description  :AES解密数据
 * @param         {string} cipherText 解密数据
 * @return        {*} 解密值
 */
export const decrypt = (cipherText: string): any => {
  const bytes = CryptoJS.AES.decrypt(cipherText, CryptoSecret);
  const originText: string = bytes.toString(CryptoJS.enc.Utf8);
  if (originText) return JSON.parse(originText);
  return null;
};

/**
 * @description  :MD5计算数据
 * @param         {string} str 字符串
 * @return        {string} 返回值
 */
export const encryptMD5 = (str: string): string => {
  return CryptoJS.MD5(str).toString();
};
