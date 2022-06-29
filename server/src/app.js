import routes from "./routes/routes";
import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

// const routeBase = '/api/v1';
const routeBase = '';

app.use(routeBase, routes);

export default app;