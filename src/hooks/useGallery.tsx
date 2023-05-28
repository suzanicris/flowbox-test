import { useContext } from "react";
import { Context } from "../context/GalleryContext";

export const useGallery = () => useContext(Context);
