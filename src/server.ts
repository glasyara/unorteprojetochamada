import express from "express";
import { Router, Request } from "express";
import { defaultRoute } from "./routes";

const app = express();
const port = 3000;
app.use(express.json());
app.use(defaultRoute);

console.log(`Server is running on http://localhost:${port}`);
