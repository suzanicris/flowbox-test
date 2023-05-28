import React, { createContext, useState } from "react";
import { useFetchPhotos } from "hooks/useFetchPhotos";
import mockPhotos from "mocks/mockPhotos";

export type ContextProps = {
  photos: Photo[];
  loading: boolean;
  fail: boolean;
  useMock: boolean;
  toggleUseMock: () => void;
};

export const Context = createContext<ContextProps>({
  photos: [],
  loading: false,
  fail: false,
  useMock: false,
  toggleUseMock: () => {},
});

export const GalleryContext = ({ children }: { children: React.ReactNode }) => {
  const [useMock, setUseMock] = useState(false);

  const { photos: fetchedPhotos, loading, fail } = useFetchPhotos();

  const photos = useMock ? mockPhotos : fetchedPhotos;
  const toggleUseMock = () => setUseMock((prevValue) => !prevValue);

  const contextValue: ContextProps = {
    photos,
    loading,
    fail,
    useMock,
    toggleUseMock,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
