import React from "react";
import OptForm from "../../components/opt-form";
import FloatingInput from "../../components/floating-input";

function OptFormContainer() {
  return (
    <OptForm >
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership
      </OptForm.Text>
      <OptForm.Group>
        <FloatingInput
          type="email"
          name="email"
          placeholder="Email address"          
          width='350px'
          className="opt-form"
        />
        <OptForm.Button>Get Started</OptForm.Button>
      </OptForm.Group>
    </OptForm>
  );
}

export default OptFormContainer;
