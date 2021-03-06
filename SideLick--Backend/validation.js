const Joi = require('@hapi/joi');

// Register Validation
const registerValidation = data => {
	const schema = Joi.object({
  		fullName: Joi.string()
  			.min(2)
  			.required(),
		status: Joi.boolean()
		.required(),
  		email: Joi.string()
  			.min(6)
  			.required()
  			.email(),
		phoneNumber: Joi.number()
			.required(),
		age: Joi.number()
			.max(100)
			.required(),
		gender: Joi.string().trim()
			.required(),
  		password: Joi.string().trim()
  			.min(6)
  			.required()
	});
	return schema.validate(data)
}

// Login Validation
const loginValidation = data => {
	const schema = Joi.object({
  		email: Joi.string().trim()
  			.min(6)
  			.required()
  			.email(),
  		password: Joi.string().trim()
  			.min(6)
  			.required()
	});
	return schema.validate(data)
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;