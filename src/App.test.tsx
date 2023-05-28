import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContextProps } from "context/GalleryContext";
import mockPhotos from "mocks/mockPhotos";
import App from "./App";

jest.mock("hooks/useGallery", () => ({
  useGallery: () =>
    ({
      photos: mockPhotos,
      loading: false,
      fail: false,
      useMock: false,
      toggleUseMock: jest.fn(),
    } as ContextProps),
}));

describe("App", () => {
  it("renders the welcome title", () => {
    render(<App />);

    expect(screen.getByText("Welcome!")).toBeInTheDocument();
    expect(screen.getAllByTestId("carousel-image")[0]).toBeInTheDocument();
  });

  it("updates the layout on form change", () => {
    render(<App />);

    userEvent.click(screen.getByLabelText("Grid"));

    expect(screen.queryByTestId("carousel-image")).not.toBeInTheDocument();
    expect(screen.getByTestId("grid-only-images")).toBeInTheDocument();
  });
});
