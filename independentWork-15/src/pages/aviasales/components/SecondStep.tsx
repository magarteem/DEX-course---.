import { FC, useState } from "react";
import styled from "styled-components";
import { SecondStepType, StepsDataFieldType } from "../../../App";
import { Input } from "../../../ui/Input";

const Navigate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 40%;
  height: 28px;
  cursor: pointer;
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
  onChangeValue: (value: string) => void;
  onChangeSecondStep?: any;
  secondStep: SecondStepType;
}

export const SecondStep: FC<Props> = ({
  changeStep,
  onChangeValue,
  inputFieldValue,
  onChangeSecondStep,
  secondStep,
}) => {
  const [departure, setDeparture] = useState(secondStep.departure);
  const [returns, setReturns] = useState(secondStep.returns);
  const onChangeDeparture = (e: string) => setDeparture(e);
  const onChangeSetReturns = (e: string) => setReturns(e);
  const handleSubmit = (event: any, page: number) => {
    event.preventDefault();
    onChangeSecondStep({
      departure: departure,
      returns: returns,
    });
    changeStep(page);
  };

  return (
    <form action="#" onSubmit={(event) => handleSubmit(event, 1)}>
      <Input
        inputType="date"
        name="date"
        id="1"
        label="Дата отправления"
        placeholder=""
        value={departure}
        stateChangeValue={onChangeDeparture}
      />
      <Input
        inputType="date"
        name="date"
        id="2"
        label="Дата Возвращения"
        placeholder=""
        required={true}
        value={returns}
        stateChangeValue={onChangeSetReturns}
      />
      <Navigate>
        <Button type="submit">Назад</Button>
        <Button type="submit" onClick={(event) => handleSubmit(event, 3)}>
          Дальше
        </Button>
      </Navigate>
    </form>
  );
};

//Реализовать форму второго шага
//Сделать контейнер для кнопочек

//export const SecondStep: FC = () => {
//  return <form action="#"></form>;
//};
