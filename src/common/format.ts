/**
 * @description: 将字节大小转换为 B，KB, MB, GB
 * @param {number} value 字节
 * @return {string} 1024GB
 */
export const formatByte = (value: number): string => {
  if (value === 0) return '0B';
  const unitArr = ['B', 'KB', 'MB', 'GB', 'TB'];
  let index = 0;
  const srcSize = parseFloat(String(value));
  index = Math.floor(Math.log(srcSize) / Math.log(1024));
  let size: string | number = srcSize / 1024 ** index;
  // 保留的小数位数
  if (index !== 0)
    size = size.toFixed(2);
  return size + unitArr[index];
};

/**
 * @description  :把秒转为时分秒格式
 * @param         {number} secondNumber 秒
 * @param         {string} split 链接字符
 * @return        {string} 00:03:35
 */
export const formatSeconds = (secondNumber: number, split = ':'): string => {
  if (secondNumber === 0 || secondNumber < 0) return '00:00:00';
  const result = Math.floor(secondNumber << 0);
  const h
    = Math.floor(result / 3600) < 10 ? `0${Math.floor(result / 3600)}` : Math.floor(result / 3600);
  const m
    = Math.floor((result / 60) % 60) < 10
      ? `0${Math.floor((result / 60) % 60)}`
      : Math.floor((result / 60) % 60);
  const s = Math.floor(result % 60) < 10 ? `0${Math.floor(result % 60)}` : Math.floor(result % 60);
  return `${h}${split}${m}${split}${s}`;
};

/**
 * @description  :时间戳转时间格式
 * @param         {number} timestamp 时间戳（毫秒）
 * @return        {string} 2022-03-14 14:03:45
 */
export const formatTimestamp = (timestamp: number): string => {
  if (!timestamp) return '';
  const date = new Date(timestamp * 1000);
  const Y = `${date.getFullYear()}-`;
  const M = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`;
  const D = `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()} `;
  const h = `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:`;
  const m = `${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:`;
  const s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return Y + M + D + h + m + s;
};
