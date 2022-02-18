import { FC } from "react";
import styled from "styled-components";
import { Input } from "../../../ui/Input";

//Реализовать форму третьего шага
interface Props {
  changeStep: (step: number) => void;
}

export const ThirdStep: FC<Props> = ({ changeStep }) => {
  const handleSubmit = (event: any, page: number) => {
    event.preventDefault();

    changeStep(page);
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event, 2)}>
        <fieldset>
          <legend>Параметры</legend>
          <Input
            inputType="text"
            name="step2"
            id="2"
            label="Количество билетов"
            placeholder=""
            required={false}
          />
          <Navigate>
            <span>Класс</span>
            <select>
              <option>Супер эконом (стоячий)</option>
              <option>Эконом (табурет)</option>
              <option>Бизнес (кресло dxRaser)</option>
            </select>
          </Navigate>

          <Navigate>
            <span>Трезвый пилот</span>
            <CustomLabel htmlFor="labrlCheck">
              <input id="labrlCheck" type="checkbox" />
              <span></span>
            </CustomLabel>
          </Navigate>
        </fieldset>
        {/*  */}
        <fieldset>
          <p>ddddd</p>
        </fieldset>

        <Navigate>
          <Button type="submit">Назад</Button>
          <Button type="submit" onClick={(event) => handleSubmit(event, 3)}>
            Заказать
          </Button>
        </Navigate>
      </form>
    </div>
  );
};

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

const CustomLabel = styled.label`
  width: 50px;
  height: 25px;
  position: relative;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 30px;
  background-color: #9e5b5b;
  span {
    left: 0;
    top: 0;
    position: absolute;
    height: 25px;
    width: 25px;
    background-color: #000;
    border-radius: 30px;
  }
  input {
    display: none;
  }
  input:checked + span {
    right: 0;
    left: auto;
  }
`;
