function Product() {
  this.otsiv  = new Reviews(1,"Oleg","good",10)
  this.otsiv1 = new Reviews(2,"Okcana","good",9)
  this.otsiv2 = new Reviews(3,"Milana","good",8)
  this.otsivi = [this.otsiv,this.otsiv1,this.otsiv2]
  this.product  = new Products(1,"ttt","description",200,"brand",["XS","S","M","L","XL","XXL"],"activeSize","quantity",this.otsivi);
  this.product1 = new Products(2,"tar","description",250,"brand",["XS","S","M","L","XL","XXL"],"activeSize","quantity",this.otsivi);
  this.product2 = new Products(3,"kkk","description",100,"brand",["XS","S","M","L","XL","XXL"],"activeSize","quantity",this.otsivi);
  function Products(id,name,description,price,brand,sizes,activeSize,quantity,otsivi) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.sizes = sizes;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = new Date().toUTCString();
    this.reviews =  otsivi
    this.images = ["img1","img2","img3","img4","img5"]
  }
  function Reviews(id,author,comment,rating) {
    this.id = id;
    this.date = new Date().toUTCString();
    this.author = author
    this.comment = comment
    this.rating = rating
  }

  this.getReviewByID = function(id){
    c = 0
    for(;c<this.otsivi.length;c++){
      if (this.otsivi[c].id === id){return console.log(this.otsivi[c])}
    }
  }

  this.addSize = function (size) {
    this.product.sizes.push(size)
  }

  this.deleteSize = function (rosmer){
    ind = this.product.sizes.indexOf(rosmer)
    return this.product.sizes.splice(ind, 1)[0]
  }

  this.addReview = function (){
    this.otsivi.push(new Reviews(this.otsivi.length+1,"Udhen","good",8));
    return otsivi
  }

  this.deleteReview = function (id){
    for(c=0;c<this.otsivi.length;c++){
      if(this.otsivi[c].id == id){
        ind = this.otsivi.indexOf(this.otsivi[c])
        this.otsivi.splice(ind, 1)
        this.otsivi[c] = this.otsivi[c]
        console.log(otsivi[c])
        return this.otsivi
      }
    }
  }

  this.getAverageRating = function (){
    c=0;b=0
    for(;c<this.otsivi.length;c++){
      b=b+this.otsivi[c].rating
    }
    c = b / c
    return console.log(c)
  }

  this.getImage = function (img){
    ind = this.product.images.indexOf(img)
    if (ind === undefined) {
      return this.product.images[0];
    }
    return console.log(this.product.images[ind]);
  }
}
let a = new Product()
function searchProducts(products,search){
  res=[]
  for(b=0,c=0;b<products.length;b++){
    if(products[b].name.includes(search)){
      res[c]=products[b].name
      c++
    }
  }
  return console.log(res)
}
searchProducts([a.product,a.product1,a.product2],"t")

function sortProducts(products,sort){
  res=[]
  for(b=0;b<products.length;b++){
    if(products[b].name.includes(sort[1])){
      sort[1] = products[b].name
    }
    if(products[b].name.includes(sort[1]) && sort[2] === products[b].id && sort[0] === products[b].price){
      res[0] = products[b]
      products.splice(products.indexOf(products[b]), 1)
      pri = []
      for(a=0;a<products.length;a++){pri[a] = products[a].price}
      for(a=0,c=1;a<products.length;a++){
        if(Math.min.apply(null, pri) === products[a].price){
        res[c] = products[a]
        pri.splice(pri.indexOf(Math.min.apply(null, pri)), 1)
        c++
        }
      }
    }
  } 
  return res
}
sortProducts([a.product,a.product1,a.product2],[100,"k",3])

