"use client";
import AuthForm from "@/components/AuthForm";
import { signUp } from "@/lib/actions/auth";
import { signUpSchema } from "@/lib/validations";

const Page = () => {
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
