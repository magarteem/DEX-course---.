import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Switch } from "../../../ui/Switch";

//Сделать три кнопки, с индикацией выбранного шага в данный момент,
//Добавить колбэки для перехода по шагам по клику

interface IProps {
  currentStep: number;
  changeStep: (step: number) => void;
}

export const StepIndicator: FC<IProps> = ({ changeStep, currentStep }) => {
  return (
    <>
      <Switch
        inputType="radio"
        name="swith"
        label="Куда"
        id={1}
        changeStep={changeStep}
        currentStep={currentStep}
      />
      <Switch
        inputType="radio"
        name="swith"
        label="Когда"
        id={2}
        changeStep={changeStep}
        currentStep={currentStep}
      />
      <Switch
        inputType="radio"
        name="swith"
        label="Как"
        id={3}
        changeStep={changeStep}
        currentStep={currentStep}
      />
    </>
  );
};
