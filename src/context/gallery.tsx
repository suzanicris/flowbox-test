import { ReactNode, createContext } from "react";
import { useFetchPhotos } from "../hooks/useFetchPhotos";

type ContextProps = {
  photos: Photo[];
};

export const Context = createContext<ContextProps>({ photos: [] });

export const GalleryContext = ({ children }: { children: ReactNode }) => {
  const photos = useFetchPhotos();

  return <Context.Provider value={{ photos }}>{children}</Context.Provider>;
};
