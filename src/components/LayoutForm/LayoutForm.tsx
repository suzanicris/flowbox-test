import { Form, Radio } from "antd";
import { Layout } from "helpers/constants";

export const options = [
  { value: Layout.CARD, label: "Card" },
  { value: Layout.CAROUSEL, label: "Carousel" },
  { value: Layout.GRID, label: "Grid" },
  { value: Layout.LIST, label: "List" },
];

type LayoutFormProps = {
  onChange: (layout: Layout) => void;
};

const LayoutForm = ({ onChange }: LayoutFormProps) => (
  <Form
    layout="horizontal"
    initialValues={{ layout: Layout.CAROUSEL }}
    onValuesChange={({ layout }) => onChange(layout)}
  >
    <Form.Item name="layout">
      <Radio.Group>
        {options.map(({ value, label }) => (
          <Radio key={value} value={value}>
            {label}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  </Form>
);

export default LayoutForm;
