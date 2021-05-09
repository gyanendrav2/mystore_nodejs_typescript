import joi from "joi";

export const signupSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi
    .string()
    .equal(joi.ref("password"))
    .required()
    .messages({ "any.only": "password and confirmPassword are not maching." }),
});
