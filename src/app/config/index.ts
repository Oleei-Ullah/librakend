import { config } from "dotenv";
import path from "path";

config({path: path.join(process.cwd(), ".env")});


export default {
    database_uri: process.env.MONGODB_URI,
    port: process.env.PORT
}