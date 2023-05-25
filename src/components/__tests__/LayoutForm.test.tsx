/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LayoutForm, { options } from "../LayoutForm";
import { Layout } from "../../helpers/constants";

describe("LayoutForm", () => {
  test("options", () => {
    expect(options).toMatchInlineSnapshot(`
Array [
  Object {
    "label": "Card",
    "value": 0,
  },
  Object {
    "label": "Carousel",
    "value": 1,
  },
  Object {
    "label": "Grid",
    "value": 2,
  },
  Object {
    "label": "List",
    "value": 3,
  },
]
`);
  });

  it("should render 4 radios button", () => {
    const onChange = jest.fn();

    const { getByLabelText } = render(<LayoutForm onChange={onChange} />);

    const card = getByLabelText(/card/i);
    const carousel = getByLabelText(/carousel/i);
    const grid = getByLabelText(/grid/i);
    const list = getByLabelText(/list/i);

    expect(card).toBeInTheDocument();
    expect(carousel).toBeInTheDocument();
    expect(grid).toBeInTheDocument();
    expect(list).toBeInTheDocument();

    userEvent.click(card);
    expect(onChange).toHaveBeenCalledWith(Layout.CARD);

    userEvent.click(carousel);
    expect(onChange).toHaveBeenCalledWith(Layout.CAROUSEL);

    userEvent.click(grid);
    expect(onChange).toHaveBeenCalledWith(Layout.GRID);

    userEvent.click(list);
    expect(onChange).toHaveBeenCalledWith(Layout.LIST);
  });
});
