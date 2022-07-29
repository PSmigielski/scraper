import IStrategy from "../interfaces/IStrategy";

class AmazonStrategy implements IStrategy{
    page = "amazon";
    public async execute(slug: string, multipleEntities: boolean) {
        //tutaj dodajesz logikę z puppeteera https://pptr.dev/ 
        return {
            name: "AMD Ryzen 5 5600G 6-Core 12-Thread Unlocked Desktop Processor with Radeon Graphics ",
            imageCdn:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShSx9r9Y8yBgODwooLAD48GowKIaLIrWPskQ&usqp=CAU",
            price: "147.10",
            url: "https://www.amazon.com/AMD-Ryzen-5600G-12-Thread-Processor/dp/B092L9GF5N",
        };
    }
}

export default AmazonStrategy;