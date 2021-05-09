import express from "express";
import { authRoutes } from "./routes/auth";
import { sequelize } from "./util/database";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "server is running on port 500" });
});

app.use("/auth", authRoutes);

sequelize
  .sync()
  .then((res: any) => {
    app.listen(port);
  })
  .catch((err: any) => {
    console.log(err);
  });
