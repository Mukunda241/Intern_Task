const Joi = require('joi');

const validateContactForm = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().email().required(),
    subject: Joi.string().min(3).max(255).required(),
    message: Joi.string().min(10).max(5000).required()
  });
  return schema.validate(data);
};

const validateProject = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    description: Joi.string().min(10).max(5000).required(),
    image_url: Joi.string().uri().allow(null),
    tags: Joi.array().items(Joi.string()).required(),
    github_url: Joi.string().uri().allow(null),
    live_url: Joi.string().uri().allow(null)
  });
  return schema.validate(data);
};

module.exports = {
  validateContactForm,
  validateProject
};
