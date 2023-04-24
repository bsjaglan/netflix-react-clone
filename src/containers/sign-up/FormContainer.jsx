import React, {useState} from "react";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";

import {auth} from "../../config/firebase";
import {Body, SignUpForm, Title, SubTitle, Error, Button} from "./bodyStyles";
import {
  signUpInitialValues,
  signUpValidationSchema,
} from "../../constants/formSchemas";
import {FloatingInput} from "../../components";
import handleError from "../../helpers/handleFirbaseErrors";
import {ROUTES} from "../../constants/routes";

// --------------------------------------------------------------------------------------------------------- //

function FormContainer() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (values, action) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: values.fname,
          photoURL: Math.floor(Math.random() * 5) + 1,
        })
          .then(() => {
            navigate(ROUTES.BROWSE);
          })
          .catch((error) => {
            setError(handleError(error));
            action.resetForm();
          });
      })
      .catch((error) => {
        setError(handleError(error));
        action.resetForm();
      });
  };

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: signUpInitialValues,
      validationSchema: signUpValidationSchema,
      onSubmit,
    });

  return (
    <Body className="sign-up-form">
      <SignUpForm onSubmit={handleSubmit} method="POST">
        <Title>Create a password to start your membership</Title>
        <SubTitle>Just a few more steps and you're done!</SubTitle>
        <SubTitle>We hate paperwork, too.</SubTitle>

        {error && <Error>{error}</Error>}

        <FloatingInput
          margin="15px 0 0"
          width="100%"
          placeholder="First name"
          id="fname"
          name="fname"
          type="text"
          isTouched={touched.fname}
          haveErrors={errors.fname}
          onBlur={handleBlur}
          value={values.fname}
          onChange={handleChange}
          className="sign-up-form"
        />

        <FloatingInput
          margin="15px 0 0"
          width="100%"
          placeholder="Email or phone number"
          id="email"
          name="email"
          type="text"
          isTouched={touched.email}
          haveErrors={errors.email}
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          className="sign-up-form"
        />

        <FloatingInput
          margin="15px 0"
          width="100%"
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          isTouched={touched.password}
          haveErrors={errors.password}
          onBlur={handleBlur}
          value={values.password}
          onChange={handleChange}
          className="sign-up-form"
        />

        <Button type="submit">Register</Button>
      </SignUpForm>
    </Body>
  );
}

export default FormContainer;
