import { NextFunction, Request, Response } from "express"
import ApiErrorException from "../exceptions/ApiErrorException";

const validateQueryParameters = (queryParameters: Array<string>) =>{
    return (req: Request, res: Response, next: NextFunction) => {
        queryParameters.forEach(queryParameter =>{
            if(!req.query[queryParameter]){
                throw new ApiErrorException(`${queryParameter} required`, 400);
            }
        });
        next();
    }
}

export default validateQueryParameters;