// queries for product
exports.getAllProduct = "select * from products";
exports.getAllProductByID = "SELECT * FROM Products WHERE id = ?";
exports.getAllProductByName = "SELECT * FROM Products WHERE name = ?";
exports.getAllProductByFeatured = "SELECT * FROM Products WHERE featured = ?";
exports.addProduct = "INSERT INTO products(name, featured, price, details) VALUES(?,?,?,?) ";
exports.deleteProduct = "delete from products where id = ?"
exports.updateProduct = "update products set name = ?, featured= ?, price =?, details = ? where id = ?"



// queries for user and authentication

exports.addUser = "insert into user(name, email, password) values(?,?,?) ";
exports.deleteUser = "delete from user where id = ?";
exports.getUserByEmail = "SELECT * FROM user WHERE email = ?";
exports.getUser = "select * from user";
exports.updateUser = "update user set name = ?, email= ?, password =?, id = ?";

// queries for image table

exports.addImageUrl = "insert into image(productId, url) values(?,?)";
exports.deleteImageUrl = "delete from image where id = ?"
exports.updateImageUrl = "update image set url = ? where id = ?"
exports.getImageUrl = "select * from image where productId = ?"