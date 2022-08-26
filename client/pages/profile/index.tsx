import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styled from "styled-components";
import { withLayout } from "../../layout/Layout";
import { Button } from "../../src/components/Button";
import Text from "../../src/components/Text";
import { ProfileStyles } from "./styles";

const { Container, Bold } = ProfileStyles;

const Auth: NextPage = () => {
  const router = useRouter();
  const login = global?.window?.localStorage?.getItem("login");
  useEffect(() => {
    if (!login) {
      router.push("./login");
    }
  }, [login]);

  const singUp = () => {
    global.window.localStorage.setItem("login", "");
    global.window.localStorage.setItem("accessToken", "");
    router.push("./login");
  };

  return (
    <Container>
      <Text heading2>
        Здравствуйте, <Bold>{login}</Bold>
      </Text>
      <Button onClick={singUp}>Выйти</Button>
    </Container>
  );
};

export default withLayout(Auth);
