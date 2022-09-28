interface ImageWH {
  width: number;
  height: number;
}
/**
 * @description  :获取图片宽、高
 * @param         {File} file 图片
 * @return        {ImageWH} 图片宽高
 */
export const getImgWH = (file: File): ImageWH => {
  const imgWH: ImageWH = {
    width: 0,
    height: 0,
  };
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (): void => {
    const image = new Image();
    (image as any).src = reader.result;
    image.onload = (): ImageWH => {
      imgWH.width = image.width;
      imgWH.height = image.height;
      return imgWH;
    };
  };
  return imgWH;
};
