import React from "react";
import Select from "react-select";

export const ReactSelect = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "vanilla", label: "Vanilla" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const colorStyles = {
    container: (styles: any) => ({
      ...styles,
      flex: "0 1 365px",
      border: " 0.5px solid #D1D1D1",
    }),
    control: (styles: any) => ({
      ...styles,
    }),
    multiValueLabel: (styles: any) => ({
      ...styles,
      color: "#fff",
      fontSize: "14px",
      paddingTop: "5px",
    }),
    multiValue: (styles: any) => ({
      ...styles,
      borderRadius: "4px",
      backgroundColor: "red",
      color: "#fff",
      height: "24px",
    }),
    input: (styles: any) => ({
      ...styles,
      padding: "0 12px",
      fontSize: "14px",
      color: "#303030",
    }),
    placeholder: (styles: any) => ({
      ...styles,
      fontSize: "14px",
      color: "#707070",
      paddingLeft: "12px",
    }),
    singleValue: (styles: any) => ({
      ...styles,
    }),

    menu: (styles: any) => ({
      ...styles,
      marginTop: "2px",
    }),
  };

  return (
    <Select
      options={options}
      styles={colorStyles}
      // menuIsOpen
      isMulti
    />
  );
};
