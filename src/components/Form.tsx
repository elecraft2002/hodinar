"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import Button from "./Button";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default /* async */ function Form() {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="mb-5">
        <label htmlFor="name" className="mb-3 block text-base font-medium">
          Vaše jméno
        </label>
        <input
          type="text"
          placeholder="Vaše jméno"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-tertiary focus:shadow-md text-primary"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="mb-3 block text-base font-medium">
          Email
        </label>
        <input
          type="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-mediumoutline-none focus:border-tertiary focus:shadow-md text-primary"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="mb-3 block text-base font-medium">
          Zpráva
        </label>
        <textarea
          rows={4}
          placeholder="Napište Vaši zprávu"
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-tertiary focus:shadow-md text-primary"
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <div>
        <Button type="primary">Odeslat</Button>
      </div>
    </form>
  );
}
