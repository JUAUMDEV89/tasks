import 'dotenv';
import "reflect-metadata";
import * as express from "express";
import { createConnection } from 'typeorm';
import routes from "./routes";

const app = express();

createConnection();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333,()=>{
    console.log(`Server Running at port ${process.env.PORT || 3333}`);
})


