import { IMAGE_DEFAULT } from "../../../../../../enum/imageDefault";

export const getImageSource = (imageSource) => {
  return imageSource || IMAGE_DEFAULT;
};
