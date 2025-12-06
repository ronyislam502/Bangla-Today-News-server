import { Category } from "../category/category.model"

const createNewsIntoDB=async(payload:string)=>{
    const isCategoryExists=await Category.findById(payload);

    const result=await 
}

export const NewsServices={
    createNewsIntoDB
}