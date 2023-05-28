/* eslint-disable testing-library/no-node-access */

import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";
import mockPhotos from "mocks/mockPhotos";

describe("Carousel", () => {
  it("renders images in a carousel", () => {
    render(<Carousel photos={mockPhotos} />);

    const carouselImages = screen.getAllByTestId("carousel-image");

    // Getting only the uniques because ant carousel duplicates image
    const uniques = carouselImages.filter(
      (carousel) => !carousel.closest(".slick-cloned")
    );

    expect(uniques.length).toBe(mockPhotos.length);

    mockPhotos.forEach((_, index) => {
      const src = mockPhotos[index].urls.regular;
      const alt = mockPhotos[index].alt_description;

      expect(uniques[index]).toHaveAttribute("src", src);
      expect(uniques[index]).toHaveAttribute("alt", alt);
    });
  });
});
