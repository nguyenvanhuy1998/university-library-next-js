"use client";
import React from "react";
import {
    DefaultValues,
    FieldValues,
    Path,
    SubmitHandler,
    useForm,
    UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import FileUpload from "./FileUpload";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

interface Props<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: T;
    // onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
    onSubmit: (data: T) => void;
    type: "SIGN_IN" | "SIGN_UP";
}
const AuthForm = <T extends FieldValues>({
    schema,
    defaultValues,
    type,
    onSubmit,
}: Props<T>) => {
    const isSignIn = type === "SIGN_IN";
    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    });
    const handleSubmit: SubmitHandler<T> = (data) => {
        onSubmit(data);
    };

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-white">
                {isSignIn
                    ? "Welcome Back to the BookWise"
                    : "Create Your Library Account"}
            </h1>
            <p className="text-light-100">
                {isSignIn
                    ? "Access the vast collection of resources, and stay updated"
                    : "Please complete all fields and upload a valid university ID to gain access to the library"}
            </p>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="w-full space-y-6"
                >
                    {Object.keys(defaultValues).map((field) => (
                        <FormField
                            key={field}
                            control={form.control}
                            name={field as Path<T>}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        {
                                            FIELD_NAMES[
                                                field.name as keyof typeof FIELD_NAMES
                                            ]
                                        }
                                    </FormLabel>
                                    <FormControl>
                                        {field.name === "universityCard" ? (
                                            <FileUpload
                                                onFileChange={field.onChange}
                                            />
                                        ) : (
                                            <Input
                                                type={
                                                    FIELD_TYPES[
                                                        field.name as keyof typeof FIELD_TYPES
                                                    ]
                                                }
                                                className="form-input"
                                                {...field}
                                            />
                                        )}
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                    <Button type="submit" className="form-btn">
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </Button>
                </form>
            </Form>
            <p className="text-center text-base font-medium">
                {isSignIn
                    ? "Don’t have an account already? "
                    : "Have an account already? "}
                <Link
                    href={isSignIn ? "/sign-up" : "sign-in"}
                    className="font-bold text-primary"
                >
                    {isSignIn ? "Register here" : "Login"}
                </Link>
            </p>
        </div>
    );
};

export default AuthForm;
