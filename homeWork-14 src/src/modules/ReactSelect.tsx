import React from "react";
import Select from "react-select";

export const ReactSelect = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      display: "flex",
      aliganItems: "center",
      backgroundColor: "#4f4f4f",
      width: "194px",
      height: "37px",
      borderRadius: "10px",
      border: "none",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: "#fff",
    }),
  };

  return (
    <section>
      <h1>ReactSelect</h1>
      <Select options={options} styles={colorStyles} />
    </section>
  );
};
