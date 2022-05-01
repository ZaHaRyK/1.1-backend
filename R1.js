let otsiv = new Reviews("Oleg","good product","10/10")
let reviews = otsiv
function Product(name,description,price,brand,sizes,activeSize,quantity) {
  this.id = Math.floor(Math.random() * 1000000) + 1  ;
  this.name = name;
  this.description = description;
  this.price = price;
  this.brand = brand;
  this.sizes = sizes;
  this.activeSize = activeSize;
  this.quantity = quantity;
  this.date = new Date().toUTCString();
  this.reviews =  reviews
  this.images = ["im1","im2","im3","im4","im5"]
}

let lold = new Product("назва","краткий опис","ціна","бренд","розмір","активний розмір","продуктов в запасі");

function Reviews (author,comment,rating) {
  this.id = Math.floor(Math.random() * 1000000) + 1;
  this.date = new Date().toUTCString();
  this.author = author
  this.comment = comment
  this.rating = rating
}

