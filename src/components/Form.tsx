"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import Button from "./Button";
import Loading from "react-loading";
import Link from "next/link";

export type FormData = {
  name: string;
  email: string;
  tel: string;
  message: string;
  product: string;
};
type State = "loading" | "succes" | "error" | "normal";

export default /* async */ function Form({ product }: { product?: string }) {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const [state, setState] = useState<State>("normal");
  useEffect(() => {
    product && setValue("product", product);
  });

  function sendEmail(data: FormData) {
    const apiEndpoint = "/api/email";
    setState("loading");
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        setState(response.err ? "error" : "succes");
        // alert(response.message);
      });
    // .catch((err) => {
    //   alert(err);
    // });
  }

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {state !== "succes" && (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block text-base font-medium">
              Vaše jméno
            </label>
            <input
              required
              type="text"
              placeholder="Vaše jméno"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-tertiary focus:shadow-md text-primary"
              {...register("name", { required: true, maxLength: 100 })}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="example@domain.com"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-mediumoutline-none focus:border-tertiary focus:shadow-md text-primary"
              {...register("email", { required: true, maxLength: 100 })}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium">
              Telefon (napovinný)
            </label>
            <input
              type="tel"
              placeholder="+420 123 456 789"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-mediumoutline-none focus:border-tertiary focus:shadow-md text-primary"
              {...register("tel", { required: false, maxLength: 20 })}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium"
            >
              Zpráva
            </label>
            <textarea
              rows={4}
              placeholder="Napište Vaši zprávu"
              className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-tertiary focus:shadow-md text-primary"
              {...register("message", { required: true, maxLength: 1000 })}
            ></textarea>
          </div>
          <div>
            <Button type="primary">Odeslat</Button>
          </div>
        </form>
      )}
      {state === "loading" && (
        <div className="bg-primary/80 w-screen h-screen fixed left-0 top-0 flex justify-center items-center">
          <Loading type="bars" />
        </div>
      )}
      {state === "succes" && (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-center w-full font-semibold text-3xl mb-4">
            Odesláno!
          </h2>
          <Link href={"/"}>
            <Button type="tertiary">Domů</Button>
          </Link>
        </div>
      )}
      {state === "error" && <p className="text-red-500">Něco se nepovedlo.</p>}
    </div>
  );
}
