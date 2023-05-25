import { useEffect, useState } from "react";

const searchParams = new URLSearchParams({
  count: "6",
  orientation: "landscape",
});

const headers = new Headers({
  Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
});

export const useFetchPhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const fetchPhotos = () => {
    fetch(`${process.env.REACT_APP_API_URL}/photos/random?` + searchParams, { headers })
      .then((response) => response.json())
      .then((data: Photo[]) => setPhotos(data));
  };

  useEffect(() => {
    if (photos.length) return;

    fetchPhotos();
  });

  return photos;
};
