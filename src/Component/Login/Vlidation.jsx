const Validation = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "name required";
  } else if (values.name.length < 5) {
    errors.name = "name must be above 5 character";
  }

  if (!values.password) {
    errors.password = "password required";
  } else if (values.password.length < 8) {
    errors.password = "password must be above 8";
  }

  return errors;
};

export default Validation;
