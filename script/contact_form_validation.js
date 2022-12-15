const validate = new window.JustValidate("#contact-form");
validate
  .addField(
    "#contact-name",
    [
      {
        rule: "required",
        errorMessage: "Please enter your name",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Name is too short",
      },
      {
        rule: "maxLength",
        value: 10,
        errorMessage: "Name is too long",
      },
    ],
    {
      errorFieldCssClass: "input-err",
      errorLabelCssClass: "contact-form-err-msg",
      errorsContainer: "#contact-name-err",
    }
  )
  .addField(
    "#contact-email",
    [
      {
        rule: "required",
        errorMessage: "Please fill email field",
      },
      {
        rule: "email",
        errorMessage: "Please use a valid email address",
      },
    ],
    {
      errorFieldCssClass: "input-err",
      errorLabelCssClass: "contact-form-err-msg",
      errorsContainer: "#contact-email-err",
    }
  )
  .addField(
    "#contact-message",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Message is too short",
      },
      {
        rule: "maxLength",
        value: 255,
        errorMessage: "Message is too long",
      },
    ],
    {
      errorFieldCssClass: "input-err",
      errorLabelCssClass: "contact-form-err-msg",
      errorsContainer: "#contact-message-err",
    }
  );
