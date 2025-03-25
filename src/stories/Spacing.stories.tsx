import React from "react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Atom/Spacing",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;
const SpaceCalc = ({ value }: { value: string }) => {
  const spacing = React.useMemo(() => {
    const bodyStyle = window.getComputedStyle(document.body);
    return bodyStyle.getPropertyValue(`--spacing-${value}`);
  }, [value]);
  return <span>{spacing}</span>;
};

//Diamo stile all testo all'interno della Story con css
const Style: React.FC = () => {
  return (
    <style>
      {`
     dl {
         font-size: 1rem;
            border: 1px solid #ccc;
            display: grid;
            max-width: calc(550rem/16);
            grid-template-columns: 1fr 1fr;
            border-bottom: none;
            border-radius: 0.5rem;
     }`}
      {`dt{ 
      font-weight: 600;
      padding: var(--spacing-md) var(--spacing-md);
      border-bottom: 1px solid #ccc;
      }`}
      {`dd{
      padding: var(--spacing-md) var(--spacing-md);
      border-bottom: 1px solid #ccc;
      font-family: monospace; 
      font-size: 0.9rem;
      }`}
      {`.info{
      background-color:rgb(5, 13, 253);
      height: 1rem;
  
      display: block;
      }`}
    </style>
  );
};

// DT = TERMINE DI DESCRIZIONE
// DD = DETTAGLIO DESCRIZIONE
// DL = LISTA DEFIINZIONE
export const Default: Story = {
  render: () => (
    <>
      <Style />
      <dl>
        {["zero", "xs", "sm", "md", "lg", "xl"].map((key) => (
          <React.Fragment key={key}>
            <dt>{key}</dt>
            <dd style={{ padding: `var(--spacing-${key})` }}>
              <SpaceCalc value={key} />
              <span>
                <SpaceCalc value={`--spacing-${key}`} />
              </span>
              <span
                className="info"
                style={{ width: `var(--spacing-${key})` }}
              />
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </>
  ),
};
