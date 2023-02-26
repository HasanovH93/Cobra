const dataController = require("../controllers/data.js");
const userController = require("../controllers/authentication/auth.js");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.json({ message: "REST Service Operational" });
  });
  app.use("/", dataController);
  app.use("/auth", userController);
};
