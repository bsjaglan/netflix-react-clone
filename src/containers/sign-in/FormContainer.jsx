import React from "react";
import {useFormik} from "formik";

import {CustomForm, FloatingInput} from "../../components";

import {
  signInFormIntialValues,
  signInFormValidationSchema,
} from "../../constants/formSchemas";

function FormContainer() {
  const onSubmit = (values, action) => {
    console.log(values.email);
  };

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: signInFormIntialValues,
      validationSchema: signInFormValidationSchema,
      onSubmit,
    });

  return (
    <CustomForm>
      <CustomForm.Title>Sign In</CustomForm.Title>
      <FloatingInput
        width="100%"
        height="50px"
        placeholder="Email or phone number"
        type="email"
        name="email"
        haveErrors={errors.email}
        isTouched={touched.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className="sign-in-form"
      />
      <FloatingInput
        width="100%"
        height="50px"
        margin="13px 0"
        placeholder="Password"
        type="password"
        name="password"
        haveErrors={errors.password}
        isTouched={touched.password}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className="sign-in-form"
      />
      <CustomForm.Button>Sign In</CustomForm.Button>
      <CustomForm.Group>
        <CustomForm.CheckBox />
        <CustomForm.Text size="13px">Remember me</CustomForm.Text>
        <CustomForm.TextLink style={{flex: "1", textAlign: "right"}}>
          Need help?
        </CustomForm.TextLink>
      </CustomForm.Group>
      <CustomForm.Group style={{padding: "25px 0 10px"}}>
        <CustomForm.Text>New to Netflix?</CustomForm.Text>
        <CustomForm.TextLink size="16px" color="white">
          {" "}
          Sign up now.
        </CustomForm.TextLink>
      </CustomForm.Group>
      <CustomForm.Group></CustomForm.Group>
      <CustomForm.Text size='13px'>
        This page is protected by Google reCAPTCHA to ensure you're not a bot. 
        <CustomForm.TextLink color='#0071EB'> Learn more.</CustomForm.TextLink>
      </CustomForm.Text>
    </CustomForm>
  );
}

export default FormContainer;
