import { useEffect, useState } from "react";

export const searchParams = new URLSearchParams({
  count: "6",
  orientation: "landscape",
});

export const headers = {
  Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
};

export const url =
  `${process.env.REACT_APP_API_URL}/photos/random?` + searchParams;

export const useFetchPhotos = () => {
  const [loading, setLoading] = useState(false);
  const [fail, setFail] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  const fetchPhotos = async () => {
    setLoading(true);

    try {
      const response = await fetch(url, { headers });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      setPhotos(json);
    } catch (err) {
      console.warn(err);
      setFail(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (photos.length) return;

    fetchPhotos();
  }, [photos.length]);

  return { photos, loading, fail };
};
