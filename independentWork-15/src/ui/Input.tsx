import React, { FC } from "react";
import styled from "styled-components";

const ContainerLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 6px;
  font-size: 20px;
  margin-top: 20px;
  span:first-child {
    align-self: flex-start;
  }
`;
const InputField = styled.input`
  width: 100%;
  height: 20px;
  :invalid {
    border: 1px solid red;
  }
`;
const InpError = styled.span`
  color: #ff0000;
  align-self: flex-end;
`;

interface InputProps {
  inputType:
    | "text"
    | "password"
    | "number"
    | "checkbox"
    | "radio"
    | "button"
    | "date";
  name: string;
  id: string;
  label: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  stateChangeValue?: any;
}
export const Input: FC<InputProps> = ({
  inputType,
  name,
  id,
  label,
  value = "",
  placeholder,
  required,
  stateChangeValue,
}) => {
  return (
    <ContainerLabel htmlFor={id}>
      <span>{label}</span>
      <InputField
        type={inputType}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => stateChangeValue(e.target.value)}
      />
      {/*<InpError>required</InpError>*/}
    </ContainerLabel>
  );
};
