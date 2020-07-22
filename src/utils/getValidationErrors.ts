import { ValidationError } from 'yup';

interface Error {
  [key: string]: string;
}

const getValidationErrors = (err: ValidationError): Error => {
  const errors: Error = {};

  err.inner.forEach(error => {
    errors[error.path] = error.message;
  });

  return errors;
};

export default getValidationErrors;
