import React, {useState} from "react";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";

import {CustomForm, FloatingInput} from "../../components";
import {auth} from "../../config/firebase";
import handleError from "../../helpers/handleFirbaseErrors";
import {ROUTES} from "../../constants/routes";

import {
  signInFormIntialValues,
  signInFormValidationSchema,
} from "../../constants/formSchemas";

function FormContainer() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((user) => {
        console.log("Login Successful." + JSON.stringify(user));
        navigate(ROUTES.BROWSE);
      })
      .catch((error) => setError(handleError(error)));
  };

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: signInFormIntialValues,
      validationSchema: signInFormValidationSchema,
      onSubmit,
    });

  return (
    <CustomForm onSubmit={handleSubmit} method="POST">
      <CustomForm.Title>Sign In</CustomForm.Title>
      {error && <CustomForm.Error error={error} />}
      <FloatingInput
        width="100%"
        height="50px"
        placeholder="Email or phone number"
        type="text"
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
      <CustomForm.Button type="submit">Sign In</CustomForm.Button>
      <CustomForm.Group>
        <CustomForm.CheckBox />
        <CustomForm.Text size="13px">Remember me</CustomForm.Text>
        <CustomForm.TextLink style={{flex: "1", textAlign: "right"}}>
          Need help?
        </CustomForm.TextLink>
      </CustomForm.Group>
      <CustomForm.Group style={{padding: "25px 0 10px"}}>
        <CustomForm.Text>New to Netflix?</CustomForm.Text>
        <CustomForm.TextLink size="16px" color="white" to={ROUTES.SIGN_UP}>
          {" "}
          Sign up now.
        </CustomForm.TextLink>
      </CustomForm.Group>
      <CustomForm.Group></CustomForm.Group>
      <CustomForm.Text size="13px">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <CustomForm.TextLink color="#0071EB"> Learn more.</CustomForm.TextLink>
      </CustomForm.Text>
    </CustomForm>
  );
}

export default FormContainer;
