/* eslint-disable no-console */
import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().message({
      'any.required': 'Title is required (phuochieu)',
      'string.empty': 'Title to not allowed to be empty (phuochieu)',
      'string.min': 'Title length must be at least 3 characters long  (phuochieu)',
      'string.max': 'Title length must be less than or equal to 50 characters long (phuochieu)',
      'string.trim': 'Title must not have leading or trailing whitespace (phuochieu)'
    }),
    description: Joi.string().required().min(3).max(255).trim().strict()
  })
  try {
    console.log(req.body)
    //Chỉ định abortEarly: false để trường hợp có nhiều lỗi validation thì trả về tất cả lỗi
    await correctCondition.validateAsync(req.body, { abortEarly: false })

    //next()
    res.status(StatusCodes.CREATED).json({ message: 'POST from Validation: API creat new board' })

  } catch (error) {
    console.log(error)
    //console.log(new Error(error))
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: new Error(error).message
    })
  }
}

export const boardValidation = {
  createNew
}
