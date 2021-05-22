import express, { Router } from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import db from "./infra/index.js";

const app = express();
const PORT = 3000;
const v1Router = Router();

db.sync();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api/v1', v1Router);

// imports for our routes
import usersRoutes from "./users/routes/index.js";

v1Router.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});