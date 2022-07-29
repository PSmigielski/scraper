import { Data } from "../types/Data";

interface IStrategy{
    page: string;
    execute(slug: string, multipleEntities: boolean): Promise<Data|Data[]>;
}

export default IStrategy;