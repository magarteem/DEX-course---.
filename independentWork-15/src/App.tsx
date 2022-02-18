import React, { FC, useCallback, useState } from "react";
import "./styles.css";
import { Aviasales } from "./pages/aviasales/Aviasales";
import { StepIndicator } from "./pages/aviasales/components/StepsIndicator";

//
interface FirstStepType {
  where: string;
  going: string;
}
export interface SecondStepType {
  departure: string;
  returns: string;
}
//
export interface Step1Type {
  where: string;
  going: string;
}
export interface StepsDataFieldType {
  step1: Step1Type;
  step2: {
    departure: string;
    return: string;
  };
  step3: {
    text: string;
    text1: string;
  };
}
export interface StepsDataFieldType {
  step1: Step1Type;
  step2: {
    departure: string;
    return: string;
  };
  step3: {
    text: string;
    text1: string;
  };
}

export const App: FC = () => {
  //? свич
  const [currentStep, setCurrentStep] = useState(1);
  const changeStep = (step: number) => {
    setCurrentStep(step);
  };

  // ?
  const stepsDataField: StepsDataFieldType = {
    step1: {
      where: "11111",
      going: "2222222",
    },
    step2: {
      departure: "",
      return: "",
    },
    step3: {
      text: "",
      text1: "",
    },
  };

  //? //////////
  const [inputFieldValue, setInputFieldValue] = useState(stepsDataField);
  const onChangeValue = (e: string) => {
    console.log(inputFieldValue);
  };

  //? ///////////////////////////////////////////
  const [firstStep, setfirstStep] = useState({
    where: "",
    going: "",
  });
  const onChangeFirstStep = (e: FirstStepType) => {
    let rev = { ...firstStep };
    rev = e;
    setfirstStep(rev);
  };
  //? //////////////////////////////////////////

  //? ///////////////////////////////////////////
  const [secondStep, setSecondStep] = useState({
    departure: "275760-03-04",
    returns: "",
  });
  const onChangeSecondStep = (e: SecondStepType) => {
    let rev1 = { ...secondStep };
    rev1 = e;
    setSecondStep(rev1);
  };
  //? //////////////////////////////////////////

  return (
    <div className="App">
      <div>
        <h1>Формы</h1>
        <h2>Start creating forms to see some magic happen!</h2>
      </div>
      <h1>Авиасайлес к*****а</h1>

      <div className="forms">
        <StepIndicator changeStep={changeStep} currentStep={currentStep} />
      </div>

      <Aviasales
        inputFieldValue={inputFieldValue}
        onChangeValue={onChangeValue}
        currentStep={currentStep}
        changeStep={changeStep}
        //
        firstStep={firstStep}
        onChangeFirstStep={onChangeFirstStep}
        //
        secondStep={secondStep}
        onChangeSecondStep={onChangeSecondStep}
      />
    </div>
  );
};

export default App;

//const changeValue = (event:)

//const onChangeFirstStep = (e: FirstStepType) => {
//  console.log(e);
//  let t = { ...firstStep };
//  t = e;
//  setfirstStep(t);
//};
