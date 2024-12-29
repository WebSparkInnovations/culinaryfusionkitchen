"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../UI/Button";
import validationSchema from "../Validations";
import { sendMail } from "@/lib/sendMail";

const ContactForm = () => {

  const onSubmit = async (values) => {
    const mailHtml = `
      <h2>Contact Form Submission Details</h2>
      <p><strong>Name:</strong> ${values.name}</p>
      <p><strong>Company:</strong> ${values.company}</p>
      <p><strong>Phone:</strong> ${values.phone}</p>
      <p><strong>Email:</strong> ${values.email}</p>
      <p><strong>Event:</strong> ${values.event}</p>
      <p><strong>Guest Count:</strong> ${values.guest}</p>
      <p><strong>Date:</strong> ${values.date}</p>
      <p><strong>Location:</strong> ${values.location}</p>
      <p><strong>Message:</strong> ${values.message}</p>
    `;

    const response = await sendMail({
      email: values.email,
      subject: 'Data For Booking',
      text: mailHtml.replace(/<[^>]*>?/gm, ''),  // Strip HTML for plain text
      html: mailHtml
    });

    if (response?.messageId) {
      alert('Application Submitted Successfully.');
    } else {
      alert('Failed to send application.');
    }
  };
  const initialValues = {
    name: "",
    company: "",
    phone: "",
    email: "",
    event: "",
    guest: "",
    date: "",
    location: "",
    message: "",
  };


  return (
    <div className="w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
      // onSubmit={onSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form className="flex flex-col gap-7">
            <div className="flex flex-col relative gap-5 lg:gap-7">
              <div className="grid grid-col-1 sm:grid-cols-2 gap-5 lg:gap-2">
                <div className="relative">
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-[8px] border-[1px] placeholder:text-[14px] rounded-[12px] focus:outline-none focus:border-[#333333]"
                    placeholder="Enter first name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 absolute text-[10px] left-3"
                  />
                </div>

                <div className="relative">
                  <Field
                    type="text"
                    id="company"
                    name="company"
                    className="w-full  p-[8px] border-[1px] rounded-[12px] placeholder:text-[14px]  focus:outline-none focus:border-[#333333]"
                    placeholder="Enter your company name"
                  />
                  <ErrorMessage
                    name="company"
                    component="div"
                    className="text-red-500 absolute text-[10px] left-3"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-2">
                <div className="relative">
                  <Field
                    type="phone"
                    id="phone"
                    name="phone"
                    className="w-full  p-[8px] border-[1px] rounded-[12px] placeholder:text-[14px] focus:outline-none focus:border-[#333333]"
                    placeholder="Enter your phone number"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 absolute text-[10px] left-3"
                  />
                </div>
                <div className="relative">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full  p-[8px] border-[1px] rounded-[12px] placeholder:text-[14px] focus:outline-none focus:border-[#333333]"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 absolute text-[10px] left-3"
                  />
                </div>
              </div>

              <div className="relative">
                <Field
                  type="text"
                  id="event"
                  name="event"
                  className="w-full  p-[8px] border-[1px] rounded-[12px] placeholder:text-[14px] focus:outline-none focus:border-[#333333]"
                  placeholder="Enter event type"
                />
                <ErrorMessage
                  name="event"
                  component="div"
                  className="text-red-500 absolute text-[10px] left-3"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-2">
                <div className="relative">
                  <Field
                    type="number"
                    id="guest"
                    name="guest"
                    className="w-full  p-[8px] border-[1px] rounded-[12px] placeholder:text-[14px] focus:outline-none focus:border-[#333333]"
                    placeholder="Enter no. of guests"
                  />
                  <ErrorMessage
                    name="guest"
                    component="div"
                    className="text-red-500 absolute text-[10px] left-3"
                  />
                </div>

                <div className="relative">
                  <Field
                    type="date"
                    id="date"
                    name="date"
                    className="w-full  p-[8px] border-[1px] rounded-[12px] placeholder:text-[14px] focus:outline-none focus:border-[#333333]"
                    placeholder="Select date"
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="text-red-500 absolute text-[10px] left-3"
                  />
                </div>
              </div>
              <div className="relative">
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full  p-[8px] border-[1px] rounded-[12px] placeholder:text-[14px] focus:outline-none focus:border-[#333333]"
                  placeholder="Enter Message here.."
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 absolute text-[10px] mb-3 left-3"
                />
              </div>
            </div>

            <div className="w-full max-w-[200px]  mx-auto">
              <button
                type="submit"
                onClick={() => { onSubmit(values) }}
                className="w-full py-[8px] lg:py-2 bg-[#fc7344] text-white font-semibold text-center rounded-xl xl:rounded-2xl"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;