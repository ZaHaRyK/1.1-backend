let otsiv = new Reviews("296436","Oleg","good product","10/10")
let reviews = otsiv
function Product(id,name,description,price,brand,sizes,activeSize,quantity) {
  this.id = id  ;
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

let lold = new Product("645392","назва","краткий опис","ціна","бренд","розмір","активний розмір","продуктов в запасі");

function Reviews (id,author,comment,rating) {
  this.id = id;
  this.date = new Date().toUTCString();
  this.author = author
  this.comment = comment
  this.rating = rating
}
