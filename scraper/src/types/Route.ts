import { NextFunction, Request, Response } from "express";
import { Methods } from "./Methods";
type Route = {
    path: string;
    method: Methods;
    handler: any;
    localMiddleware: Array<
        (
            req: Request,
            res: Response,
            next: NextFunction,
        ) =>
            | void
            | ((
                  req: Request,
                  res: Response,
                  next: NextFunction,
              ) => Promise<void>)
            | ((
                  pathToSchema: string,
              ) => (req: Request, res: Response, next: NextFunction) => void)
            | ((
                  ids: Array<string> | string,
              ) => (req: Request, res: Response, next: NextFunction) => void)
    >;
}

export default Route;
