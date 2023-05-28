import { render, screen } from "@testing-library/react";
import { GalleryContext, Context, ContextProps } from "./GalleryContext";
import { useFetchPhotos } from "hooks/useFetchPhotos";
import mockPhotos from "mocks/mockPhotos";

jest.mock("hooks/useFetchPhotos");

describe("GalleryContext", () => {
  const mockHookValue = {
    photos: mockPhotos,
    loading: true,
    fail: false,
    toggleUseMock: jest.fn(),
  };

  beforeEach(() => {
    (useFetchPhotos as jest.Mock).mockReturnValue(mockHookValue);
  });

  it("provides the correct context values", () => {
    render(
      <GalleryContext>
        <Context.Consumer>
          {(context: ContextProps) => (
            <div>
              <span>{context.loading ? "Loading" : "Not Loading"}</span>
              <span>{context.fail ? "Failed" : "Not Failed"}</span>
              <span>{context.photos.length}</span>
              <button onClick={context.toggleUseMock}>Toggle Mock</button>
            </div>
          )}
        </Context.Consumer>
      </GalleryContext>
    );

    expect(screen.getByText("Loading")).toBeInTheDocument();
    expect(screen.getByText("Not Failed")).toBeInTheDocument();
    expect(screen.getByText(mockPhotos.length.toString())).toBeInTheDocument();
  });
});
