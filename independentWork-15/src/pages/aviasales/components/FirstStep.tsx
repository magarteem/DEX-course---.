import { FC, useState } from "react";
import { Input } from "../../../ui/Input";

import styled from "styled-components";
import { StepsDataFieldType } from "../../../App";

//Реализовать форму первого шага
const Button = styled.button`
  width: 100%;
  height: 28px;
  cursor: pointer;
  margin-top: 20px;
  background-color: #ebe6e6;
  border: 2px solid #726f6f;

  :hover {
    border: 2px solid #1f1e1e;
  }
  :active {
    background-color: #b8b0b0;
  }
`;

interface Props {
  inputFieldValue: StepsDataFieldType;
  changeStep: (step: number) => void;
  onChangeValue: (value: any) => void;
  onChangeFirstStep?: any;
  firstStep?: any;
}

export const FirstStep: FC<Props> = ({
  changeStep,
  onChangeValue,
  inputFieldValue,
  onChangeFirstStep,
  firstStep,
}) => {
  const [where, setWhere] = useState(firstStep.where);
  const [going, setGoing] = useState(firstStep.going);
  const onChangeWhere = (e: string) => setWhere(e);
  const onChangeGoing = (e: string) => setGoing(e);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onChangeFirstStep({
      where: where,
      going: going,
    });
    changeStep(2);
  };
  //console.log(firstStep);
  return (
    <form action="#" onSubmit={handleSubmit}>
      <Input
        inputType="text"
        name="step1"
        id="1"
        label="Откуда"
        placeholder=""
        value={where}
        stateChangeValue={onChangeWhere}
      />
      <Input
        inputType="text"
        name="step2"
        id="2"
        label="Куда"
        placeholder=""
        value={going}
        stateChangeValue={onChangeGoing}
        required={false}
      />
      <Button type="submit">Далее</Button>
    </form>
  );
};

//export const FirstStep: FC = () => {
//  return (
//    <form action="#">
//      <Input />
//      <input />
//    </form>
//  );
//};
