export const FormCompomemt = () => {
  const submit = (e: any) => {
    alert(e.target.password.value);
  };

  return (
    <>
      <form onSubmit={submit}>
        {/* 1 Сделать форму  с кнопкой отправки и кнопкой сброса полей.
   По кнопке отправить долна вызваться функция которая вызвает alert с паролем */}
        {/*2  разбить форму на 4 группы элементов с заголовками (Подформа 1, Подформа 2, ...) */}

        {/* 3 */}
        {/* 1 группа : скрытое поле, обязательное поле пароля,
       текстовое поля(только для чтения), группа из 3 радиобатаннов */}
        <fieldset>
          <legend>Подформа 1</legend>

          <label htmlFor="readon">скрытый</label>
          <input type="hidden" id="readon" />

          <label htmlFor="pass">пароль</label>
          <input type="password" id="pass" required />

          <label htmlFor="readOnly">чтение</label>
          <input type="text" value="inn" id="readOnly" readOnly />

          <div>
            <label>
              <input type="radio" name="radioName" value="text" />
              testBtn1
            </label>
            <input type="radio" name="radioName" value="text" />
            testBtn2
            <input type="radio" name="radioName" value="text" />
            testBtn3
          </div>
        </fieldset>
        {/* 2 группа : не активное поле,поле с числами с ограничением от 1 до 100,
       текстовое поля(с ограничением длины от 3 до 9 символов), 
       поле email с множественным вводом, текстове поле c подсказкой */}
        <fieldset>
          <legend>Подформа 2</legend>

          <label htmlFor="noActiv">не активное поле</label>
          <input type="text" id="noActiv" disabled />

          <label htmlFor="num">число</label>
          <input type="number" id="num" min={1} max={100} />

          <label htmlFor="length">поле с ограниченной длиной</label>
          <input type="text" id="length" maxLength={9} minLength={3} />

          <label htmlFor="mail">email с множественным вводом</label>
          <input type="email" id="mail" />

          <label htmlFor="place">поле с подсказкой</label>
          <input type="text" id="mail" placeholder="подсказка" />
        </fieldset>

        {/* 3 группа : поле с датой,поле телефона, поле загрузки файлаю, 
       группа из 3 checkbox */}
        <fieldset>
          <legend>Подформа 3</legend>

          <label htmlFor="">дата</label>
          <input type="date" autoFocus />

          <label htmlFor="">телефон</label>
          <input type="tel" pattern="[0]{1}[7]{2}[5-9]{1}-[0-9]{5}" />

          <label htmlFor="">загрузка файла</label>
          <input type="file" />

          <label htmlFor="">чекбоксы</label>
          <div>
            <input type="checkbox" name="chek" />
            условие 1
            <input type="checkbox" name="chek" checked />
            условие 2
            <input type="checkbox" name="chek" />
            условие 3
          </div>
        </fieldset>

        {/* 4 группа аналогична с 1 только все поля должны быть не активны. */}
        <fieldset disabled>
          <legend>Подформа 3</legend>

          <label htmlFor="hidden">скрытый</label>
          <input type="hidden" id="hidden" />

          <label htmlFor="pass">пароль</label>
          <input type="password" id="pass" required />

          <label htmlFor="read">чтение</label>
          <input type="text" id="read" readOnly />

          <div>
            <input type="radio" name="btn" value="text" />
            radiBtn1
            <input type="radio" name="btn" value="text" />
            radiBtn2
            <input type="radio" name="btn" value="text" />
            radiBtn3
          </div>
        </fieldset>

        <input type="submit" />
        <input type="reset" />
      </form>
    </>
  );
};
