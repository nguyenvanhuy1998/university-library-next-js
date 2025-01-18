"use client";
import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";
import React from "react";

const Page = () => {
    const signIn = (params: Pick<AuthCredentials, "email" | "password">) => {
        console.log({ params });
    };
    return (
        <AuthForm
            type="SIGN_IN"
            schema={signInSchema}
            defaultValues={{
                email: "",
                password: "",
            }}
            onSubmit={signIn}
        />
    );
};

export default Page;
