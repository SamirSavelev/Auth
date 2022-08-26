import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Слишком короткий логин")
    .max(50, "Слишком длинный логин")
    .required("Обязательное поле"),
  password: Yup.string()
    .min(6, "Длина пароля должна быть не менее 6 символов")
    .max(20, "Длина пароля должна быть не более 6 символов")
    .required("Обязательное поле"),
});
