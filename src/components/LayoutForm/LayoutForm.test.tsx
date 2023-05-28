import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LayoutForm, { options } from "../LayoutForm";

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

  it("renders layout options", () => {
    const onChange = jest.fn();

    render(<LayoutForm onChange={onChange} />);

    options.forEach((option) => {
      const radioLabel = screen.getByLabelText(option.label);
      expect(radioLabel).toBeInTheDocument();
    });
  });

  it("calls onChange with selected layout", () => {
    const onChange = jest.fn();
    render(<LayoutForm onChange={onChange} />);

    const radioInput = screen.getByLabelText(options[2].label);
    userEvent.click(radioInput);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(options[2].value);
  });

  it("sets initial layout value", () => {
    render(<LayoutForm onChange={jest.fn()} />);

    const radioInput = screen.getByLabelText(options[1].label);
    expect(radioInput).toBeChecked();
  });
});
