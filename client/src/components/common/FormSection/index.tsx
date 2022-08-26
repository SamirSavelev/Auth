import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLoginMutation } from "../../../features/auth/auth-api-slice";
import { Formik, Form, FormikValues } from "formik";
import Input from "./components/Input";
import { Button } from "../../Button";
import errorImg from "./../../../assets/error.svg";
import { FormSectionStyles } from "./styles";
import { RegisterSchema } from "./config";
import { CommonUseComponents } from "../../../../styles/CommonUseComponents";
import Text from "../../Text";

const { Row } = CommonUseComponents;
const { Container, StyledForm, ErrorBlock } = FormSectionStyles;

const FormSection = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [signUp, { isLoading, isError }] = useLoginMutation();
  const [login, setLogin] = useState("");
  const router = useRouter();

  async function signupHandler(values: FormikValues) {
    const { login, password } = values;
    setLogin(login);
    const signUpRequestBody = {
      login,
      password,
    };

    await signUp(signUpRequestBody)
      .then((response: any) => {
        if (rememberMe) {
          global.window.localStorage.setItem(
            "accessToken",
            response?.data?.accessToken
          );
        }
        if (response?.data?.user?.email) {
          global.window.localStorage.setItem(
            "login",
            response?.data?.user?.email
          );
          router.push("/profile");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  const initialValues = {
    login: "",
    password: "",
  };

  return (
    <Container>
      {isError && (
        <ErrorBlock>
          <Image src={errorImg} />
          Пользователя {login} не существует
        </ErrorBlock>
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => signupHandler(values)}
        validationSchema={RegisterSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <StyledForm>
              <Input
                label="Логин"
                type="text"
                name="login"
                placeholder="Введите логин"
                isError={errors.login && touched.login}
                error={errors.login}
              />
              <Input
                label="Пароль"
                type="password"
                name="password"
                placeholder="Введите пароль"
                isError={errors.password && touched.password}
                error={errors.password}
              />
              <Row gap="15px" flexStart>
                <input
                  id="checkbox"
                  type="checkbox"
                  onChange={() => setRememberMe((state) => !state)}
                />
                <label htmlFor="checkbox">Запомнить меня</label>
              </Row>

              <Button accent disabled={isLoading}>
                Войти
              </Button>
            </StyledForm>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FormSection;
