import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { withLayout } from "../../layout/Layout";
import Logo from "../../src/components/common/Logo";
import FormSection from "../../src/components/common/FormSection";

const Auth: NextPage = () => {
  const router = useRouter();
  const isAuth = global?.window?.localStorage?.getItem("login");
  useEffect(() => {
    if (isAuth) {
      router.push("./profile");
    }
  }, [isAuth]);

  return (
    <>
      <Logo />
      <FormSection />
    </>
  );
};

export default withLayout(Auth);
