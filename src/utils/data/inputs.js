export const inputs = {
  login: [
    {
      label: "E-mail",
      type: "email",
      name: "email",
      id: "email",
      val: {
        pattern: "[a-z0-9]+@[a-z]+.[a-z]{2,3}",
        required: true,
      },
    },
    {
      label: "Пароль",
      type: "password",
      name: "password",
      id: "password",
      val: {
        minLength: "4",
        required: true,
      },
    },
  ],
  register: [
    {
      label: "Имя",
      type: "text",
      name: "name",
      id: "name",
      val: {
        minLength: "2",
        required: true,
      },
    },
    {
      label: "E-mail",
      type: "email",
      name: "email",
      id: "email",
      val: {
        pattern: "[a-z0-9]+@[a-z]+.[a-z]{2,3}",
        required: true,
      },
    },
    {
      label: "Пароль",
      type: "password",
      name: "password",
      id: "password",
      val: {
        minLength: "4",
        required: true,
      },
    },
  ],
};
