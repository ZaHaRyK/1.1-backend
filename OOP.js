class AbstractProduct {
  constructor(id,name,description,price,brand,quantity,otsivi,img,date){
    this.id=id;
    this.name=name;
    this.description=description;
    this.price=price;
    this.brand=brand;
    this.quantity=quantity;
    this.otsivi=otsivi;
    this.img=img;
    this.date=date;
  }

  id;
  name;
  description;
  price;
  brand;
  quantity;
  otsivi;
  img;
  date;
  getFullInformation(){
    return `id - ${this.id}\nname - ${this.name}\ndescription - ${this.description}\nprice - ${this.price}\nbrand - ${this.brand}\nquantity - ${this.quantity}\notsivi - ${this.otsivi}\nimg - ${this.img}\ndate - ${this.date}`
  }
  getPriceForQuantity(int){
    let res = `$${int * this.price}`
    return res
  }
}

class Clothes extends AbstractProduct{
  constructor(id,name,description,price,brand,quantity,otsivi,img,date,material,colour){
    super(id,name,description,price,brand,quantity,otsivi,img,date)
    this.material = material;
    this.colour = colour;
  }
  colour;
  material;
}


class Electronics extends AbstractProduct{
  constructor(id,name,description,price,brand,quantity,otsivi,img,date,power,warranty)   {
    super(id,name,description,price,brand,quantity,otsivi,img,date)
    this.power = power;
    this.warranty = warranty;
  }
  warranty;
  power;
}
