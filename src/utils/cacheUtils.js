const CACHE_NAME = "mysite-dynamic";

const getCachedData = async (cacheName, url) => {
  const cacheStorage = await caches.open(cacheName);
  const cachedResponse = await cacheStorage.match(url);

  if (!cachedResponse || !cachedResponse.ok) {
    return null;
  }

  return await cachedResponse;
};

export const retrieveImage = async (url) => {
  const cachedData = await getCachedData(CACHE_NAME, url);
  if (!cachedData) {
    throw new Error("Cached data not found ");
  }

  const blobData = await cachedData.blob();
  if (!blobData) {
    throw new Error("Cached data type is invalid");
  }

  return blobData;
};

export const saveImage = async (url, file) => {
  const imageBlob = new Blob([file], { type: "image/jpeg" });
  const response = new Response(imageBlob);

  caches.open(CACHE_NAME).then((cache) => {
    cache.put(url, response);
  });
};

export const resetCache = () => {
  return caches.delete(CACHE_NAME);
};
