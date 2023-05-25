/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import Carousel from "./Carousel";
import { images } from "mocks/mockPhotos";

describe("Carousel", () => {
  it("should render all images", () => {
    const { getAllByTestId } = render(<Carousel photos={images} />);

    const carouselImages = getAllByTestId("carousel-image");
    const uniques = carouselImages.filter(
      (carousel) => !carousel.closest(".slick-cloned")
    );

    expect(uniques.length).toBe(images.length);

    expect(uniques[0]).toHaveAttribute("alt", images[0].alt_description);
    expect(uniques[1]).toHaveAttribute("alt", images[1].alt_description);
    expect(uniques[2]).toHaveAttribute("alt", images[2].alt_description);
    expect(uniques[3]).toHaveAttribute("alt", images[3].alt_description);
    expect(uniques[4]).toHaveAttribute("alt", images[4].alt_description);
    expect(uniques[5]).toHaveAttribute("alt", images[5].alt_description);
  });
});
