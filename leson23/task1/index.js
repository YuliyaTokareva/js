const emailInputEl = document.querySelector('#email');
const passwordInputEl = document.querySelector('#password');

const emailErrorEl = document.querySelector('.error-text_email');
const passwordErrorEl = document.querySelector('.error-text_password');

const isRequired = value => (value ? undefined : 'Required');

const isEmail = value => (value.includes('@') ? undefined : 'Should be an email');
const onEmailChange = event => {
  const errorText = [isRequired, isEmail]
    .map(validator => validator(event.target.value))
    .filter(errorText => errorText)
    .join(', ');

  emailErrorEl.textContent = errorText;
};

emailInputEl.addEventListener('input', onEmailChange);

const onPasswordChangeEl = event => {
  const errorText = [isRequired]
    .map(validator => validator(event.target.value))
    .filter(errorText => errorText)
    .join(', ');

  passwordErrorEl.textContent = errorText;
};

passwordInputEl.addEventListener('input', onPasswordChangeEl);
const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  // так можно получить данные формы - ВАРИАНТ 1:
  // eslint-disable-next-line no-undef
  const formFields = [...new FormData(formElem)];
  // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]
  const formData = formFields.reduce(function (acc, formField) {
    //const prop = formField[0]; // здесь "name" инпута
    //const value = formField[1]; // здесь "value" инпута
    // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
    const [prop, value] = formField;

    return {
      // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
      ...acc,
      // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
      [prop]: value,
    };
  }, {});
  alert(JSON.stringify(formData));
};

// более простой формат считывания формы - ВАРИАНТ 2:
// const formData = Object.fromEntries(new FormData(formElem));
formElem.addEventListener('submit', onFormSubmit);
