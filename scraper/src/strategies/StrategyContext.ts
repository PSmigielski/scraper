import { PagesEnum } from "../enums/PagesEnum";
import ApiErrorException from "../exceptions/ApiErrorException";
import IStrategy from "../interfaces/IStrategy";
import AmazonStrategy from "./AmazonStrategy";

class StrategyContext {
    private strategy: IStrategy | undefined;

    constructor(strategy?: IStrategy) {
        if (strategy) {
            this.strategy = strategy;
        }
    }

    public setStrategy(strategy: IStrategy) {
        this.strategy = strategy;
    }
    public execute(slug: string, multipleEntities: boolean) {
        return this.strategy?.execute(slug, multipleEntities).catch((err) => {
            throw err;
        });
    }
    public async getDataFromStrategy(
        page: string,
        slug: string,
        multipleEntities: boolean = false,
    ) {
        // tu dodajesz nowe strony z enuma + strategie do nich
        switch (page) {
            case PagesEnum.AMAZON:
                this.setStrategy(new AmazonStrategy());
                return await this.execute(slug, multipleEntities)?.catch((err) => {
                    throw err;
                });
            default:
                throw new ApiErrorException(
                    "strategy for this page does not exist",
                    404,
                );
        }
    }
}

export default StrategyContext;