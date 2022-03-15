import { useEffect, useState } from "react";
import { Cell } from "../../components/Cell/Cell";
import { retrieveImage, saveImage } from "../../utils/cacheUtils";
import { resizeImage } from "../../utils/imageUtils";

export const HomeCell = ({ item: { id, name } }) => {
  const baseUrl = "https://mu-placeholder.com";
  const url = `${baseUrl}/${id}`;
  const placeholderImage = "/img_placeholder.jpg";

  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    loadImageFromCache(url);
  }, [url]);

  const loadImageFromCache = async (url) => {
    try {
      const cachedImage = await retrieveImage(url);

      setCurrentImage(cachedImage);
    } catch (err) {
      console.warn(err);
    }
  };

  const onChangeHandler = async (event) => {
    event.preventDefault();

    const uploadedImage = event.target.files[0];

    const compressedImage = await resizeImage({
      file: uploadedImage,
      maxSize: 700,
    });

    saveImage(url, compressedImage);
    setCurrentImage(compressedImage);
  };

  const cellImage = currentImage
    ? URL.createObjectURL(currentImage)
    : placeholderImage;

  return (
    <Cell id={id} title={name} image={cellImage} onChange={onChangeHandler} />
  );
};
