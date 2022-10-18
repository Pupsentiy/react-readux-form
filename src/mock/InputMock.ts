export const shortInputMock = [
  {
    title: "Ваше Имя *",
    name: "firstName",
    placeholder: "Иван",
    mask: "",
  },
  {
    title: "Номер телефона *",
    name: "phone",
    placeholder: "+7(000) 000-00-00",
    mask: "+7(999) 999-99-99",
  },
  {
    title: "Ваш Email *",
    name: "email",
    placeholder: "example@skdesign.ru",
    mask: "",
  },
  {
    title: "Ссылка на профиль *",
    name: "urlSocial",
    placeholder: "instagram.com/skde…",
    mask: "",
  },
];

export const placeholderSelect = [
  
     {"placeholder": "От куда узнали про нас?", "name": "sources"}, 
    {"placeholder": "Выберите город *", "name": "city" },
  
];

export const longInputMock = [
  {
    title: "Название организации/студии",
    name: "companyName",
    placeholder: "SK Design",
  },
  {
    title: "Получатель",
    name: "fullName",
    placeholder: "ФИО",
  },
];

export const validEmailRegex = RegExp(".+@.+..+");
