import validationsRegExpressions from "../constants/validationsRegExpressions";

export const emailValidate = (email: string) => {
  return email.match(validationsRegExpressions.email);
};

export const passwordValidate = (password: string) => {
  return password.match(validationsRegExpressions.password);
};
