import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  company: Yup.string().required("Company name is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can be up to 15 digits"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  event: Yup.string().required("Event name is required"),
  guest: Yup.number()
    .required("Number of guests is required")
    .min(1, "There must be at least 1 guest"),
  date: Yup.date()
    .required("Date is required")
    .min(new Date(), "Date cannot be in the past"),
  location: Yup.string().required("Location is required"),
  how: Yup.string().required("How did you hear about us? is required"),
  message: Yup.string().max(500, "Message can be up to 500 characters").required('This field is required'),
});

export default validationSchema;
