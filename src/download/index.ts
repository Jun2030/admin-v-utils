/**
 * @description: 下载文件并重命名
 * @param {string} url 下载地址
 * @param {string} filename 重命名后的文件名
 * @return {*}
 */
export const downloadFileRename = (url: string, filename: string) => {
  function getBlob(url: string) {
    return new Promise((resolve): void => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = (): void => {
        if (xhr.status === 200)
          resolve(xhr.response);
      };
      xhr.send();
    });
  }
  const saveAs = (blob: any, filename: string): void => {
    if ((window.navigator as any).msSaveOrOpenBlob) {
      (navigator as any).msSaveBlob(blob, filename);
    }
    else {
      const link = document.createElement('a');
      const body = document.querySelector('body') as HTMLElement;
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;

      // fix Firefox
      link.style.display = 'none';
      body.appendChild(link);

      link.click();
      body.removeChild(link);

      window.URL.revokeObjectURL(link.href);
    }
  };
  getBlob(url).then((blob): void => {
    saveAs(blob, filename);
  });
};
