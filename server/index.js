if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: __dirname + "/.env" });
}

import express from "express";
import { connect } from "./Database/db.js";

import cors from "cors";
import routes from "./routes/routes.js";

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// All Route
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client", "build")));
  app.use("/", routes);
}

const PORT = 8080;

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
