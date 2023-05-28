/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */

import { render, screen } from "@testing-library/react";
import Grid from "./Grid";
import mockPhotos from "mocks/mockPhotos";

describe("Grid", () => {
  it("renders a grid of images with descriptions", () => {
    render(<Grid photos={mockPhotos} />);

    const cards = screen.getAllByTestId("card-regular");
    expect(cards).toHaveLength(mockPhotos.length);

    const images = screen.getAllByTestId("image");
    expect(images).toHaveLength(mockPhotos.length);

    const descriptions = screen.getAllByTestId("description");
    expect(descriptions).toHaveLength(mockPhotos.length);

    mockPhotos.forEach((_, index) => {
      const src = mockPhotos[index].urls.regular;
      const alt = mockPhotos[index].alt_description;
      const description = mockPhotos[index].description;

      expect(images[index]).toHaveAttribute("src", src);
      expect(images[index]).toHaveAttribute("alt", alt);

      expect(descriptions[index]).toHaveTextContent(description);
    });
  });

  it("renders a grid of images without descriptions", () => {
    render(<Grid photos={mockPhotos} onlyImages />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(mockPhotos.length);

    const descriptions = screen.queryByTestId("description");
    expect(descriptions).toBeNull();
  });

  it("renders a horizontal card grid", () => {
    render(<Grid photos={mockPhotos} cardHorizontal />);

    const cards = screen.getAllByTestId("card-horizontal");
    expect(cards).toHaveLength(mockPhotos.length);
  });
});
