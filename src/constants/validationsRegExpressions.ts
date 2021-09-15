const validationsRegExpressions = {
  email: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
  password: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
};

export default validationsRegExpressions;
