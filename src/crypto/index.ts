import CryptoJS from 'crypto-js';

const CryptoSecret = '__SimpleCryptoSecret__';

/* AES加密数据 */
export const encrypt = (data: unknown): string => {
  const encryptData: string = JSON.stringify(data);
  return CryptoJS.AES.encrypt(encryptData, CryptoSecret).toString();
};

/* AES解密数据 */
export const decrypt = (cipherText: string): any => {
  const bytes = CryptoJS.AES.decrypt(cipherText, CryptoSecret);
  const originText: string = bytes.toString(CryptoJS.enc.Utf8);
  if (originText) return JSON.parse(originText);
  return null;
};

/* MD5计算数据 */
export const encryptMD5 = (str: string): string => {
  return CryptoJS.MD5(str).toString();
};
