"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../UI/Button";
import validationSchema from "../Validations";

const ContactForm = () => {
  const initialValues = {
    name: "",
    company: "",
    phone: "",
    email: "",
    event: "",
    guest: "",
    date: "",
    location: "",
    how: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted with values:", values);
    resetForm();
  };

  return (
    <div className="w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-7">
          <div className="flex flex-col relative gap-7">
            <div className="grid grid-col-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-4 border-[1px] rounded-2xl focus:outline-none focus:border-[#333333]"
                  placeholder="Enter first name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 absolute text-[12px] left-3 mt-1"
                />
              </div>

              <div className="relative">
                <Field
                  type="text"
                  id="company"
                  name="company"
                  className="w-full p-4 border-[1px] rounded-2xl focus:outline-none focus:border-[#333333]"
                  placeholder="Enter your company name"
                />
                <ErrorMessage
                  name="company"
                  component="div"
                  className="text-red-500 absolute text-[12px] mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <Field
                  type="phone"
                  id="phone"
                  name="phone"
                  className="w-full p-4  border-[1px] rounded-2xl focus:outline-none focus:border-[#333333]"
                  placeholder="Enter your phone number"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 absolute text-[12px]"
                />
              </div>
              <div className="relative">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 border-[1px] rounded-2xl focus:outline-none focus:border-[#333333]"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 absolute text-[12px]"
                />
              </div>
            </div>
            <div className="relative ">
              <Field
                type="text"
                id="event"
                name="event"
                className="w-full p-4  border-[1px] rounded-2xl focus:outline-none focus:border-[#333333]"
                placeholder="Enter event type"
              />
              <ErrorMessage
                name="event"
                component="div"
                className="text-red-500 absolute text-[12px]"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <Field
                  type="number"
                  id="guest"
                  name="guest"
                  className="w-full p-4  border-[1px] rounded-2xl focus:outline-none focus:border-[#333333]"
                  placeholder="Enter no. of guests"
                />
                <ErrorMessage
                  name="guest"
                  component="div"
                  className="text-red-500 absolute text-[12px]"
                />
              </div>

              <div className="relative">
                <Field
                  type="date"
                  id="date"
                  name="date"
                  className="w-full p-4  border-[1px] rounded-2xl focus:outline-none focus:border-[#333333]"
                  placeholder="Select date"
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="text-red-500 absolute text-[12px]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <Field
                  type="number"
                  id="location"
                  name="location"
                  className="w-full p-4  border-[1px] rounded-2xl focus:outline-none focus:border-[#333333]"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="location"
                  component="div"
                  className="text-red-500 absolute text-[12px]"
                />
              </div>

              <div className="relative">
                <Field
                  type="number"
                  id="location"
                  name="location"
                  className="w-full p-4  border-[1px] rounded-2xl focus:outline-none focus:border-[#333333]"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="location"
                  component="div"
                  className="text-red-500 absolute text-[12px]"
                />
              </div>
            </div>
            <div className="relative">
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={4}
                className="w-full p-4 border-[1px] rounded-2xl focus:outline-none focus:border-[#333333]"
                placeholder="Enter Message here.."
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 absolute text-sm"
              />
            </div>
          </div>

        <div className="w-full">
        <Button
            type="submit"
            className="w-full py-4 bg-[#fc7344] text-white font-semibold text-center  rounded-2xl "
          >
            Submit 
          </Button>
        </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
