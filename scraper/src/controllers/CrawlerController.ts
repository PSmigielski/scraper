import { NextFunction, Request, Response } from "express";
import { PagesEnum } from "../enums/PagesEnum";
import validateQueryParameters from "../middleware/validateQueryParameters";
import AmazonStrategy from "../strategies/AmazonStrategy";
import StrategyContext from "../strategies/StrategyContext";
import { Methods } from "../types/Methods";
import Controller from "./Controller";


class CrawlerController extends Controller {
    path = "/crawler";
    routes = [
        {
            path: "",
            method: Methods.GET,
            handler: this.getData,
            localMiddleware: [validateQueryParameters(["page", "slug"])],
        },
    ];

    public async getData(req: Request, res: Response, next: NextFunction) {
        //tutaj nie musisz nic zmieniać page to jest nazwa strony np: amazon a slug to jest nazwa produktu sparsowana z url
        const page = req.query.page as string;
        const slug = req.query.slug as string;
        const data = await new StrategyContext()
            .getDataFromStrategy(page, slug)
            ?.catch(next);
        if(data){
            return res.status(200).json({data});
        }
    }

}

export default CrawlerController;