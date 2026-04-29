"use client"
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {

    const {register,handleSubmit,watch,formState: { errors },} = useForm()

    const a = (v) => {
        console.log(v)
    }

  return (
    <div className="flex justify-center">
      <Form className="flex w-80 shadow border lg:w-100 p-5 mt-10 rounded-xl flex-col gap-4" onSubmit={handleSubmit(a)}>

        <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" {...register("name")}/>
            <FieldError />
          </TextField>

        <TextField
            isRequired
            name="url"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Photo URL</Label>
            <Input placeholder="Enter your URL" {...register("url")}/>
            <FieldError />
          </TextField>

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
          <Input placeholder="john@example.com" {...register("email")}/>  
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" {...register("password")}/>
          
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="space-y-2">
            <div className="flex gap-2 justify-center">
          <Button className={"bg-linear-to-r from-green-500 via-blue-500 to-green-500"} type="submit">
            <Check />
            Register
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <h2 className="text-center font-semibold">Or</h2>
        <Button variant="outline" className={'w-full shadow'}><FcGoogle />Sign In With Google</Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpPage;
