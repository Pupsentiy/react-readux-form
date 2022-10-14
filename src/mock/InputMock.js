export const shortInputMock = [
  {
    title: "Ваше Имя *",
    type: "text",
    name: "firstName",
    placeholder: "Иван",
  },
  {
    title: "Номер телефона *",
    type: "number",
    name: "phone",
    placeholder: "+7(000) 000-00-00",
  },
  {
    title: "Ваш Email *",
    type: "email",
    name: "email",
    placeholder: "example@skdesign.ru",
    pattern:".+@.+\..+"
  },
  {
    title: "Ссылка на профиль *",
    type: "url",
    name: "url",
    placeholder: "instagram.com/skde…",
  },
];

export const placeholderSelect = [
  { placeholder: "От куда узнали про нас?", name: "sources" },
  { placeholder: "Выберите город *", name: "city" },
];

export const longInputMock = [
  {
    title: "Название организации/студии",
    type: "text",
    name: "companyName",
    placeholder: "SK Design",
  },
  {
    title: "Получатель",
    type: "text",
    name: "fullName",
    placeholder: "ФИО",
  },
];
