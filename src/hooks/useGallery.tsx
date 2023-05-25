import { useContext } from "react";
import { Context } from "../context/gallery";

export const useGallery = () => useContext(Context);
