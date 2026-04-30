"use client"
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {

    const {register,handleSubmit,watch,formState: { errors },} = useForm()

    const [isVisible, setIsVisible] = useState(false);

    const a = async (v) => {
        console.log(v)

        const { data, error } = await authClient.signIn.email({
            email: v.email,
            password: v.password,
            rememberMe: true,
            callbackURL: "/",
        });

        console.log({data,error})

        if(data){
          alert("Data Successfully")
        }
        if(error){
          alert(error.message)
        }

    }

  return (
    <div className="flex justify-center">
      <Form className="flex w-80 shadow border lg:w-100 p-5 mt-10 rounded-xl flex-col gap-4" onSubmit={handleSubmit(a)}>
        <h2 className="text-2xl font-bold text-center">Login</h2>


        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" {...register("email", { required: true })}/>  
          <FieldError />
        </TextField>

        <TextField className="w-full" name="password">
      <Label>Password</Label>
      <InputGroup>
        <InputGroup.Input
          className="w-full"
          type={isVisible ? "text" : "password"}
          {...register("password", { required: true })}
           placeholder="Enter your password"
        />
        <InputGroup.Suffix className="pr-0">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>

        <div className="space-y-1 mt-2">
            <div className="flex gap-2 justify-center">
          <Button className={"bg-linear-to-r from-green-500 via-blue-500 to-green-500 w-full"} type="submit">
            <Check />
            Login
          </Button>

        </div>
        <h2 className="text-center">Or</h2>
        <Button variant="outline" className={'w-full shadow'}><FcGoogle />Sign In With Google</Button>
        <h2 className="font-semibold text-center text-sm mt-3">Don’t Have An Account? <Link href={'/register'} className="text-red-600">Register</Link></h2>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
