import * as yup from "yup";

export const optFormIntialValues = {
  email: "",
};

export const optFormValidationSchema = yup.object().shape({
  email: yup.string().required("Required!"),
});

export const signInFormIntialValues = {
  email: "",
  password: "",
};

export const signInFormValidationSchema = yup.object().shape({
  email: yup.string().required("Required!"),
  password: yup
    .string()
    .required("Required!")
    .min(8, "Minimum 8 characters required!"),
});
