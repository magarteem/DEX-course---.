import React, { FC, useEffect, useState } from "react";
import "./styles.css";
import { Aviasales } from "./pages/aviasales/Aviasales";
import { StepIndicator } from "./pages/aviasales/components/StepsIndicator";

//
// увы пока готово на половину
//
interface FirstStepType {
  where: string;
  going: string;
}
export interface SecondStepType {
  departure: string;
  returns: string;
}

export const App: FC = () => {
  //? свич
  const [currentStep, setCurrentStep] = useState(1);
  const changeStep = (step: number) => {
    setCurrentStep(step);
  };
  //==============================
  const [firstStep, setfirstStep] = useState({
    where: "",
    going: "",
  });
  const onChangeFirstStep = (e: FirstStepType) => {
    let rev = { ...firstStep };
    rev = e;
    setfirstStep(rev);
  };

  const [secondStep, setSecondStep] = useState({
    departure: "",
    returns: "",
  });
  const onChangeSecondStep = (e: SecondStepType) => {
    let rev1 = { ...secondStep };
    rev1 = e;
    setSecondStep(rev1);
  };

  useEffect(() => {
    console.log("шаг 1");
    console.log(firstStep);
  }, [firstStep]);

  useEffect(() => {
    console.log("шаг 2");
    console.log(secondStep);
  }, [secondStep]);

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
