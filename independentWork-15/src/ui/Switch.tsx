import React, { FC, memo } from "react";
import styled from "styled-components";

export interface StepsChangeType {
  changeStep: (id: number) => void;
}
interface SwitchProps extends StepsChangeType {
  inputType: "radio";
  name: string;
  label: string;
  id: number;
  changeStep: (id: number) => void;
  currentStep: number;
}

export const Switch: FC<SwitchProps> = ({
  inputType,
  name,
  label,
  id,
  currentStep,
  changeStep,
}) => {
  return (
    <ContainerSwitch>
      <input
        defaultChecked={id === currentStep}
        type={inputType}
        name={name}
        onChange={() => changeStep(id)}
      />
      <span>{label}</span>
    </ContainerSwitch>
  );
};

//====================

const ContainerSwitch = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 82px;
  height: 38px;
  border: 1px solid #000;
  border-radius: 99px/54px;
  margin: 0 30px;
  cursor: pointer;
  overflow: hidden;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  input {
    display: none;
  }
  input:checked + span {
    background-color: #000000;
    color: #ffffff;
  }
`;

//export const Switch: FC = () => {
//  // const changeValue = (event:)
//  return (
//    <div></div>
//    // <Container>
//    //   <input
//    //     checked={value}
//    //     type="checkbox"
//    //     name="name"
//    //     id="text"
//    //     onChange={changeValue}
//    //   />
//    // </Container>
//  );
//};
