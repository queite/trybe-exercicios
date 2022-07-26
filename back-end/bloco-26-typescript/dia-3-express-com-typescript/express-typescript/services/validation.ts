import Joi from 'joi';

export const schemas = {
  user: Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(12).alphanum().required(),
  }),

  post: Joi.object().keys({
    title: Joi.string().min(3).required(),
    author: Joi.string().min(3).required(),
    category: Joi.string().min(3).required(),
    publicationDate: Joi.date(),
  }),
};

export const validateSchema = (schema: Joi.AnySchema, dataToValidate: object) => {
  const { error, value } = schema.validate(dataToValidate);
  if (error) throw error;
  return value;
};
