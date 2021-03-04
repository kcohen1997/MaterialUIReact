export const validations = {
  eightChar: new RegExp("^(?=.{8,})"),
  upper: new RegExp("^(?=.*[A-Z])"),
  numerical: new RegExp("^(?=.*[0-9])"),
  specialChar: new RegExp("^(?=.*[!@#$%^&*])"),
};

export const verifyPassword = (password) => {
  if (
    validations.eightChar.test(password) &&
    validations.upper.test(password) &&
    validations.numerical.test(password) &&
    validations.specialChar.test(password)
  ) {
    return true;
  }

  return false;
};

export const verifyEmailFormat = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
