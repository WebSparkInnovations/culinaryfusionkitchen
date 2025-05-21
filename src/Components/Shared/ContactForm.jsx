"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { sendMail } from "@/lib/sendMail";

// Validation schema with only phone and email as required
const validationSchema = Yup.object({
  phone: Yup.string().required("Phone number is required."),
  email: Yup.string()
    .email("Invalid email address.")
    .required("Email is required."),
  name: Yup.string(),
  company: Yup.string(),
  event: Yup.string(),
  guest: Yup.string(),
  date: Yup.string(),
  location: Yup.string(),
  message: Yup.string(),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (values) => {
    setLoading(true); // Start spinner
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
      subject: "Data For Booking",
      text: mailHtml.replace(/<[^>]*>?/gm, ""), // Strip HTML for plain text
      html: mailHtml,
    });

    setLoading(false); // Stop spinner

    if (response?.messageId) {
      setSubmitted(true); // Show thank you message
    } else {
      alert("Failed to send application.");
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
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await onSubmit(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-7">
            <div className="flex flex-col relative gap-5 lg:gap-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-2">
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
                    className="w-full p-[8px] border-[1px] rounded-[12px] placeholder:text-[14px] focus:outline-none focus:border-[#333333]"
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
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full p-[8px] border-[1px] rounded-[12px] placeholder:text-[14px] focus:outline-none focus:border-[#333333]"
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
                    className="w-full p-[8px] border-[1px] rounded-[12px] placeholder:text-[14px] focus:outline-none focus:border-[#333333]"
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
                  className="w-full p-[8px] border-[1px] rounded-[12px] placeholder:text-[14px] focus:outline-none focus:border-[#333333]"
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
                    className="w-full p-[8px] border-[1px] rounded-[12px] placeholder:text-[14px] focus:outline-none focus:border-[#333333]"
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
                    className="w-full p-[8px] border-[1px] rounded-[12px] placeholder:text-[14px] focus:outline-none focus:border-[#333333]"
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
                  className="w-full p-[8px] border-[1px] rounded-[12px] placeholder:text-[14px] focus:outline-none focus:border-[#333333]"
                  placeholder="Enter Message here.."
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 absolute text-[10px] mb-3 left-3"
                />
              </div>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center">
                  {/* Circle with Animation */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16"
                    viewBox="0 0 48 48"
                  >
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      fill="none"
                      stroke="#4CAF50"
                      strokeWidth="3" /* Match the thickness of the tick */
                      strokeDasharray="125.6" /* Adjust for the smaller circle */
                      strokeDashoffset="125.6" /* Initial offset for animation */
                      className="animate-circle"
                    />
                  </svg>
                  {/* Tick Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute h-12 w-12 text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      points="20 6 9 17 4 12"
                      fill="none"
                      stroke="#4CAF50"
                      strokeWidth="2.5" /* Match the thickness of the circle */
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="28" /* Adjust tick path length */
                      strokeDashoffset="28" /* Initial offset for animation */
                      className="animate-tick"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl font-bold text-gray-800">Thank you!</p>
                  <p className="text-lg text-gray-600">
                    Your request has been sent.
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full max-w-[200px] mx-auto">
                <button
                  type="submit"
                  className="w-full py-[8px] lg:py-2 bg-[#fc7344] text-white font-semibold text-center rounded-xl xl:rounded-2xl flex items-center justify-center gap-2"
                  disabled={isSubmitting || loading}
                >
                  {loading && (
                    <div className="loader border-white border-2 border-t-2 rounded-full h-4 w-4 animate-spin"></div>
                  )}
                  {!loading && "Submit"}
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
