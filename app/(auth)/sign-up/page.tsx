"use client";

import AuthForm from "@/components/AuthForm";
import { signup } from "@/lib/actions/auth";
import { signUpSchema } from "@/lib/validations";
import React from "react";

export default function SignUp() {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        fullName: "",
        email: "",
        universityId: 0,
        universityCard: "",
        password: "",
      }}
      onSubmit={signup}
    />
  );
}
