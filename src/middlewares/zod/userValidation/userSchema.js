const { z } = require('zod');

const userSchema = z.Object({
    displayName: z.string({
        requiredError: 'Name is required',
        invalidTypeError: 'Name must be a string',
    }).min(8, {
        message: '"displayName" length must be at least 8 characters long',
    }),
    email: z.string().email({
       message: 'message: "email" must be a valid email',
    }),
    passoword: z.string().min(6, {
        message: '"passoword" length must be at least 6 characters long',
    }),
});

module.exports = { userSchema };