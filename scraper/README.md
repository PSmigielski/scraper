
# Scraper

This tool is required for getting products data from various websites.

## Deployment

### requirements for this project
- Docker
- NodeJS 16.14.2^
- npm 8.5^

install dependencies for this project:
```bash
    npm install
```

edit .env and run this command to run crawler in dev mode

```bash
    npm run dev
```

or this commands if you want to create production enviroment 

```bash
    npm run build
    npm run start
```

## API Reference

#### Get item

```http
  GET /v1/api/crawler
```

|Query Parameter | Type     | Description                       |
| :------------- | :------- | :-------------------------------  |
| `website`      | `string` | **Required**. website name, from which data will be extracted         |
| `slug`         | `string` | **Required**. name of the product |

#### example api response 

```json
 {
    name: "AMD Ryzen 5 5600G 6-Core 12-Thread Unlocked Desktop Processor with Radeon Graphics ",
    imageCdn:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShSx9r9Y8yBgODwooLAD48GowKIaLIrWPskQ&usqp=CAU",
    price: "147.10",
    url: "https://www.amazon.com/AMD-Ryzen-5600G-12-Thread-Processor/dp/B092L9GF5N",
}
```


## Authors

- [Paweł Śmigielski](https://www.github.com/psmigielski)
- [TheFroman](https://github.com/TheFroman)
