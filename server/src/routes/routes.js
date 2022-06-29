import express from "express";
const routes = express.Router();
import LinkShortner from "../controllers/LinkShortner";

routes.post("/shrink", LinkShortner.shrink);
routes.get("/:code", LinkShortner.expand);

export default routes;