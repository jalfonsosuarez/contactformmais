"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

import clsx from "clsx";
import { useState } from "react";

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: boolean;
};

export default function Home() {
  const [errorMessage, setErrorMessage] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setErrorMessage("");
    const { firstName, lastName, email, queryType, message, consent } = data;

    // window.location.replace('/');
  };

  return (
    <main className="bg-white sm:bg-Green-200 text-black w-full h-screen">
      <section className="w-[375px] md:w-[1440px] bg-Green-200 px-1 py-2 sm:mx-auto">
        <div className="bg-White rounded-2xl my-4 mx-3 py-3 px-4">
          <h1 className="text-3xl font-bold mt-5 mb-5">Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex content-between mb-4">
              <label className="mb-2 flex flex-col md:w-full sm:mr-2">
                <span className="text-gray-700 font-[16px] mb-2">
                  First Name
                  <span className="ml-2 text-Green-600">*</span>
                </span>
                <input
                  type="text"
                  className={clsx(
                    "text-black border border-gray-300 w-full px-3 py-2 rounded-md hover:cursor-pointer hover:border-Green-600",
                    {
                      "border-red-500": !!errors.firstName,
                    }
                  )}
                  {...register("firstName", { required: true })}
                />
                {errors.firstName?.type === "required" && (
                  <span className="text-red-500">Thie field is required</span>
                )}
              </label>
              <label className="mb-2 flex flex-col md:w-full sm:ml-2">
                <span className="text-gray-700 font-[16px] mb-2">
                  Last Name
                  <span className="ml-2 text-Green-600">*</span>
                </span>
                <input
                  type="text"
                  className={clsx(
                    "text-black border border-gray-300 w-full px-3 py-2 rounded-md hover:cursor-pointer hover:border-Green-600",
                    {
                      "border-red-500": !!errors.firstName,
                    }
                  )}
                  {...register("lastName", { required: true })}
                />
                {errors.lastName?.type === "required" && (
                  <span className="text-red-500">Thie field is required</span>
                )}
              </label>
            </div>
            <div className="mb-6">
              <label className="flex flex-col mb-2">
                <span className="text-gray-700 font-[16px] mb-2">
                  Email Address
                  <span className="ml-2 text-Green-600">*</span>
                </span>
                <input
                  type="email"
                  className={clsx(
                    "required text-black border border-gray-300 w-full px-3 py-2 rounded-md hover:cursor-pointer hover:border-Green-600",
                    {
                      "border-red-500": !!errors.email,
                    }
                  )}
                  {...register("email", {
                    required: true,
                    pattern: RegExp("^(.+)@(\\S+)$"),
                  })}
                />
                {errors.email?.type === "required" && (
                  <span className="text-red-500">Thie field is required</span>
                )}
              </label>
            </div>
            <p className="font-[16px] mb-2">
              Query Type
              <span className="ml-2 text-Green-600">*</span>
            </p>
            <div className="md:flex content-between mb-6">
              <div className="w-full h-12 border border-gray-300 rounded-lg px-5 py-3 sm:mr-2">
                <input
                  className="required hover:cursor-pointer"
                  type="radio"
                  name="topping"
                  value="General Enquiry"
                  id="General_Enquiry"
                  // checked={selectedTopping === "Regular"}
                  // onChange={(e) => setSelectedTopping(e.target.value)}
                />
                <label className="ml-2" htmlFor="General_Enquiry">
                  General Enquiry
                </label>
              </div>
              <div className="w-full h-12 border border-gray-300 rounded-lg px-5 py-3 mt-6 sm:mt-0 sm:ml-2">
                <input
                  className="required hover:cursor-pointer"
                  type="radio"
                  name="topping"
                  value="Support Request"
                  id="Support_Request"
                  // checked={selectedTopping === "Regular"}
                  // onChange={(e) => setSelectedTopping(e.target.value)}
                />
                <label className="ml-2" htmlFor="Support_Request">
                  Support Request
                </label>
                {/* {queryType === null && (
                  <span className="text-red-500">Thie field is required</span>
                )} */}
              </div>
            </div>
            <label className="mb-2 flex flex-col">
              <span className="text-gray-700 font-[16px] mb-2">
                Message
                <span className="ml-2 text-Green-600">*</span>
              </span>
              <input
                type="textarea"
                className="required h-48 text-black border border-gray-300 w-full px-3 py-2 mb-4 rounded-md
                  hover:cursor-pointer hover:border-Green-600"
                {...register("message", { required: true })}
              />
              {errors.message?.type === "required" && (
                <span className="text-red-500">Thie field is required</span>
              )}
            </label>
            <div className="form-group form-check flex">
              <div className="h-12 w-6 content-center">
                <input
                  className="required hover:cursor-pointer hover:border-Green-600"
                  type="checkbox"
                  id="acceptTerms"
                  {...register("consent", { required: true })}
                />
              </div>
              <div className="h-12 w-full px-3 content-center">
                <label
                  htmlFor="acceptTerms"
                  className="form-check-label font-[16px]  hover:cursor-pointer hover:border-Green-600"
                >
                  I consent to being contacted by the team
                  <span className="ml-1 text-Green-600">*</span>
                </label>
              </div>
            </div>
            <div>
              <button className="bg-Green-600 text-Green-200 rounded-lg w-full h-[60px] mt-10 hover:cursor-pointer hover:bg-black">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="text-center font-[11px]">
        <span>Challenge by </span>
        <Link
          className="font-bold"
          href={"https://www.frontendmentor.io?ref=challenge"}
          target="_blank"
        >
          Frontend Mentor
        </Link>
        <span> Code by </span>
        <Link className="text-Violet-blue font-bold" href={"#"}>
          José A. Suárez
        </Link>
      </div>
    </main>
  );
}
