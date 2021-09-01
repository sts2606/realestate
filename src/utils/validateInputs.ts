export const emailValidate = (email: string) => {
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
};

export const passwordValidate = (password: string) => {
  return password.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g);
};
