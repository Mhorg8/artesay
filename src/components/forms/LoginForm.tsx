"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  email: z.string().email(),
  username: z
    .string()
    .min(6, { message: "username must be at least 2 characters" })
    .max(16, { message: "username must be at 16 characters" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" })
    .max(16, { message: "password must be at 16 characters" })
    .regex(/[a-zA-Z]/, "password shuold have one letter"),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form
      {...form}
     
    >
        <div  className="flex-1 px-4 flex flex-col justify-start h-full py-5 border-l border-zinc-400 bg-zinc-200/50 background-blur rounded-e-xl">

      
      <div className="my-5">
        <h2 className="text-3xl font-bold text-center">Welcome Back</h2>
        <p className="text-gray-400">Login for get access to all features</p>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem >
                <FormLabel className="capitalize">email</FormLabel>
                <FormControl>
                  <Input className="bg-white" placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        ></FormField>
        <FormField
          name="username"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="capitalize">Username</FormLabel>
                <FormControl>
                  <Input className="bg-white" placeholder="Jon Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        ></FormField>

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="capitalize">password</FormLabel>
                <FormControl>
                  <Input className="bg-white" placeholder="*********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        ></FormField>
        <Button className="w-full cursor-pointer" variant={"default"} color="">
          Login
        </Button>
      </form>
      </div>
    </Form>
  );
};

export default LoginForm;
