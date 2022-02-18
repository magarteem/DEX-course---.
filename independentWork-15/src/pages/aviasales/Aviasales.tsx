import React, { FC } from "react";
import styled from "styled-components";
import { StepsDataFieldType } from "../../App";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";

interface Props {
  currentStep: number;
  changeStep: (step: number) => void;
  onChangeValue: (value: string) => void;
  inputFieldValue: StepsDataFieldType;
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
  inputFieldValue,
  onChangeValue,
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
            inputFieldValue={inputFieldValue}
            onChangeValue={onChangeValue}
            //
            firstStep={firstStep}
            onChangeFirstStep={onChangeFirstStep}
          />
        ) : currentStep === 2 ? (
          <SecondStep
            changeStep={changeStep}
            inputFieldValue={inputFieldValue}
            onChangeValue={onChangeValue}
            //
            secondStep={secondStep}
            onChangeSecondStep={onChangeSecondStep}
          />
        ) : (
          <ThirdStep
            changeStep={changeStep}
            inputFieldValue={inputFieldValue}
            onChangeValue={onChangeValue}
          />
        )}
      </ContainerSales1>
    </>
  );
};

// eslint-disable-next-line no-lone-blocks
{
  /*<div>
<div>
  <div>
    <FirstStep />
  </div>
  <div>Форма</div>
  <div>Форма</div>
</div>
<div>
  <div>Форма</div>
  <div>Форма</div>
  <div>Форма</div>
</div>
</div>*/
}
