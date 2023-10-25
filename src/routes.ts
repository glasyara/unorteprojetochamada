import { Router, Request, Response } from "express";

const defaultRoute = Router();

defaultRoute.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});

export { defaultRoute };
