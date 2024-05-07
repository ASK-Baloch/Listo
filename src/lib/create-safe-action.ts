import { z } from "zod";

export type FieldErrors<T> = {
    [K in keyof T]?: string
}

export type ActionState<TInput,TOuput>={
    fieldsErrors?:FieldErrors<TInput>,
    error?:string|null,
    data?:TOuput,
}

export const createSafeAction = <TInput,TOuput>(
    schema:z.Schema<TInput>,
    handler:(validatedData:TInput)=>Promise<ActionState<TInput,TOuput>>
) => {
    return async (data:TInput):Promise<ActionState<TInput,TOuput>> => {
        const validationResult = schema.safeParse(data)
        if(!validationResult.success){
           return{
            fieldsErrors:validationResult.error.flatten().fieldErrors as FieldErrors<TInput>,
           }
        }
    return handler(validationResult.data) 
    }
}