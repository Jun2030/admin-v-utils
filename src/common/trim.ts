/**
 * @description  :去除收尾空格，中间连续空格只保留一个
 * @param         {string} str 需要处理的字符串
 * @return        {string}
 */
export const trimBlank = (str: string): string => {
  return str.replace(/(^\s*)|(\s*$)/g, '').replace(/\s{2,}/g, ' ');
};
