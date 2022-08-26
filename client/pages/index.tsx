import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";
import Logo from "../src/components/common/Logo";
import FormSection from "../src/components/common/FormSection";
import { selectAccessToken } from "../src/features/auth/auth-slice";
import { selectIsAuthenticated } from "../src/features/user/user-slice";
import { useAppSelector } from "../src/hooks";

const Home: NextPage = () => {
  const router = useRouter();
  const isAuth = global?.window?.localStorage?.getItem("login");

  useEffect(() => {
    if (isAuth) {
      router.push("./profile");
    } else {
      router.push("./login");
    }
  }, [isAuth]);

  return (
    <>
      <Logo />
      <FormSection />
    </>
  );
};

export default withLayout(Home);
