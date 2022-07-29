import express, {Express, json} from "express";
import dotenv from "dotenv";
import cors from "cors";
import errorHandler from "./middleware/errorHandler";
import Server from "./config/Server";
import CrawlerController from "./controllers/CrawlerController";
dotenv.config();

const app: Express = express();
const port = process.env.PORT
const host = process.env.HOSTNAME

const controllers = [
    new CrawlerController()
];
const globalMiddleware = [
    json(),
    cors({ credentials: true, origin: process.env.BACKEND_URL }),
];
const errorHandlers = [ errorHandler ];
new Server(controllers, globalMiddleware, errorHandlers).startServer();
