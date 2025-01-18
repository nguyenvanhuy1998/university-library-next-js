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
                email: "",
                password: "",
                fullName: "",
                universityId: 0,
                universityCard: "",
            }}
            onSubmit={signUp}
        />
    );
};

export default Page;
