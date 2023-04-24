import React from "react";
import {useFormik} from "formik";

import {
  optFormIntialValues,
  optFormValidationSchema,
} from "../../constants/formSchemas";

import {OptForm, FloatingInput} from "../../components";

// ------------------------------------------------------------------------------------------------------------ //

function OptFormContainer() {
  const onSubmit = (values, action) => {
    console.log(values.email);
  };

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: optFormIntialValues,
      validationSchema: optFormValidationSchema,
      onSubmit,
    });

  return (
    <OptForm onSubmit={handleSubmit} method="POST">
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership
      </OptForm.Text>
      <OptForm.Group>
        <FloatingInput
          type="email"
          name="email"
          placeholder="Email address"
          width="350px"
          haveErrors={errors.email}
          isTouched={touched.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className='opt-form'
        />
        <OptForm.Button type="submit">Get Started</OptForm.Button>
      </OptForm.Group>
    </OptForm>
  );
}

export default OptFormContainer;
