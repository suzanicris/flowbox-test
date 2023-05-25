import { ReactNode, createContext } from "react";
import { useFetchPhotos } from "../hooks/useFetchPhotos";

export const Context = createContext<Photos>({ photos: [] });

export const GalleryContext = ({ children }: { children: ReactNode }) => {
  const photos = useFetchPhotos();

  return <Context.Provider value={{ photos }}>{children}</Context.Provider>;
};
