"use client";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";

const Page = () => {
    const signUp = (params: AuthCredentials) => {
        console.log({
            params,
        });
    };
    return (
        <AuthForm
            type="SIGN_UP"
            schema={signUpSchema}
            defaultValues={{
                fullName: "",
                email: "",
                universityId: 0,
                password: "",
                universityCard: "",
            }}
            onSubmit={signUp}
        />
    );
};

export default Page;
