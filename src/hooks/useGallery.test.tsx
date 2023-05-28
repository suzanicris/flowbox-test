import { renderHook } from "@testing-library/react";
import { useGallery } from "./useGallery";
import { Context, ContextProps } from "../context/GalleryContext";

describe("useGallery", () => {
  it("returns the gallery context", () => {
    const mockGalleryContext: ContextProps = {
      photos: [],
      loading: false,
      fail: false,
      useMock: false,
      toggleUseMock: jest.fn(),
    };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Context.Provider value={mockGalleryContext}>{children}</Context.Provider>
    );

    const { result } = renderHook(() => useGallery(), { wrapper });

    expect(result.current).toEqual(mockGalleryContext);
  });
});
