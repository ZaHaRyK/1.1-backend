function Product(id,name,description,price,brand,sizes,activeSize,quantity,reviews,images) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.sizes = sizes;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = new Date().toUTCString();
    this.reviews =  reviews
    this.images = images

    this.getReviewByID = function(id){
        for(i = 0;i<this.reviews.length;i++){
            if (this.reviews[i].id === id){
                return this.reviews[i]
            }
        }
    }
    
    this.addSize = function (size) {
        this.sizes.push(size)
    }

    this.deleteSize = function (size){
        return this.sizes.splice(this.sizes.indexOf(size), 1)
    }

    this.addReview = function (name,comment,rating){
        this.reviews.push(new Reviews(this.otsivi.length+1,name,comment,rating));
        return this.reviews
    }

    this.deleteReview = function (id){
        for(let i=0; i<this.reviews.length;c++){
          if(this.reviews[i].id === id){
            this.reviews.splice(this.reviews.indexOf(this.reviews[i]), 1)
          }
        }
        return this.reviews
    }

    this.getAverageRating = function (){
        let rating = 0;
        for(let i = 0;c<this.reviews.length;i++){
          rating=rating+this.reviews[i].rating
        }
        return rating/=this.reviews.length
    }

    this.getImage = function (img){
        if (this.images.indexOf(img) === undefined) {
          return this.images[0];
        }
        return this.images[this.images.indexOf(img)];
    }

}
function Reviews(id,author,comment,rating) {
    this.id = id;
    this.date = new Date().toUTCString();
    this.author = author
    this.comment = comment
    this.rating = rating
}
const a = new Product(1,"aaa","description",100,"guci",["XS","S","M","L","XL","XXL"],"L","quantity",[new Reviews(1,"Oleg","good",10),new Reviews(2,"Okcana","good",9)],["img1","img2","img3"])
const b = new Product(2,"cccc","description",300,"gucishik",["XS","S","M","L","XL","XXL"],"XX","quantity",[new Reviews(3,"Oleg","good",10),new Reviews(4,"Okcana","good",9)],["img1","img2","img3"])
const c = new Product(3,"bbb","description",200,"abibas",["XS","S","M","L","XL","XXL"],"XXL","quantity",[new Reviews(5,"Oleg","good",10),new Reviews(6,"Okcana","good",9)],["img1","img2","img3"])
const products = [a,b,c]

function searchProducts(products,search){
    res=[];let i=0
    for(let b=0;b<products.length;b++){
      if(products[b].name.includes(search)){
        res[i]=products[b].name
        i++
      }
    }
    return console.log(res)
}

function sortProducts(products,sortRule){
    return products.sort(function(a, b) {
      if (sortRule === 'id' || sortRule === 'price') {
          return a[sortRule] - b[sortRule];
      } else if (sortRule === 'name') {
          if(a.name < b.name){
            return -1
          }else return 1
      }
  })
  }
