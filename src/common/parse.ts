interface FileParseInfo {
  // 文件名
  pureName: string;
  // 文件后缀名
  pureExt: string;
}

/**
 * @description  :解析文件名、后缀名
 * @param         {string} url 文件路径
 * @return        {FileParseInfo}
 */
export const parseFileName = (url: string): FileParseInfo => {
  let pureName = '';
  let pureExt = '';
  const index: number = url.lastIndexOf('.');
  if (index >= 0) {
    // 如果匹配到了点.
    const part1: string = url.substring(0, index);
    const part2: string = url.substring(index + 1);
    if (part1 && part2) {
      // 如果点（.）前、后都有内容
      pureName = part1;
      pureExt = part2;
    }
    else if (!part1 && part2) {
      // 点（.）前没有内容，点（.）后有内容
      pureName = '';
      pureExt = part2;
    }
    else {
      // 点（.）前有内容，点（.）后没有内容
      // 点（.）前没有内容，点（.）后也没有内容
      pureName = url;
      pureExt = 'Unknown';
    }
  }
  else {
    pureName = url;
    pureExt = 'Unknown';
  }
  return { pureName, pureExt };
};
