/* eslint-disable quotes */
/* eslint-disable no-useless-catch */
import ApiError from "~/utils/ApiError"
import { slugify } from "~/utils/formatters"
const createNew = async (reqBody) => {
  try {
    // Xử lý logic dữ liệu tùy đặc thù dự án
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }
    // Gọi tới tần model để xử lý lưu bản ghi newBoard vào trong Database
    //...

    // Làm thêm các xử lý logic khác với các Collection khác tuỳ đặc thù dự án...vv
    // Bắn Email, Nofitication về cho admin khi có 1 cái board được tạo...vv

    // Trả kết quả về, trong Service luôn phải có return
    return newBoard
  } catch (error) {throw error}
}
export const boardService = {
  createNew
}