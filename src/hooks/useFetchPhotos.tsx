import { useEffect, useState } from "react";
import { images } from "../mocks/mockPhotos";

const searchParams = new URLSearchParams({
  count: "6",
  orientation: "landscape",
});

const headers = new Headers({
  Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
});

export const useFetchPhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>(images);

  const fetchPhotos = () => {
    fetch(`${process.env.API_URL}/photos/random?` + searchParams, { headers })
      .then((response) => response.json())
      .then((data: Photo[]) => setPhotos(data));
  };

  useEffect(() => {
    if (photos.length) return;

    fetchPhotos();
  });

  return photos;
};
