import React, { FC } from "react";
import styled from "styled-components";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";

interface Props {
  currentStep: number;
  changeStep: (step: number) => void;
  onChangeFirstStep?: any;
  firstStep: any;
  onChangeSecondStep?: any;
  secondStep: any;
}

//Создать компонент stepsIndicator
//Добавить формы с переходом по шагам
const ContainerSales1 = styled.section`
  width: 400px;
`;

export const Aviasales: FC<Props> = ({
  currentStep,
  changeStep,
  onChangeFirstStep,
  firstStep,
  onChangeSecondStep,
  secondStep,
}) => {
  return (
    <>
      <ContainerSales1>
        {currentStep === 1 ? (
          <FirstStep
            changeStep={changeStep}
            //
            firstStep={firstStep}
            onChangeFirstStep={onChangeFirstStep}
          />
        ) : currentStep === 2 ? (
          <SecondStep
            changeStep={changeStep}
            //
            secondStep={secondStep}
            onChangeSecondStep={onChangeSecondStep}
          />
        ) : (
          <ThirdStep changeStep={changeStep} />
        )}
      </ContainerSales1>
    </>
  );
};
