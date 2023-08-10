const app = require("express");
const route = app.Router();
const ProductController = require("../controller/productController")
const UserController = require("../controller/userController")


route.get("/products",ProductController.getProduct);
route.get("/products_by_id/:id",ProductController.getProductByID);
route.get("/products/featured",ProductController.getFeatured);
route.post("/products",ProductController.addProducts);
route.delete("/products/:id",ProductController.deleteProduct);
route.put("/products/:id",ProductController.updateProduct);



route.put("/user/:id",UserController.updateUser);
route.delete("/user/:id",UserController.deleteUser);
route.post("/user/authenticate",UserController.authenticateUser);
route.post("/user",UserController.createUser);
route.get("/user",UserController.getUser);











module.exports = route