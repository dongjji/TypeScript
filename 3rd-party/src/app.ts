import "reflect-metadata";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { Product } from "./product.model";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "Book2", price: 10.99 },
];

// const p1 = new Product("A book", 19.99);

const loadedProducts = products.map((product) => {
  return new Product(product.title, product.price);
});

for (const product of loadedProducts) {
  console.log(product.getInformation());
}

// class-transformer
const loadedProducts2 = plainToClass(Product, products);

for (const product of loadedProducts2) {
  console.log(product.getInformation());
}

// class-validator
const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length) {
    console.log("Validation Errors!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
// console.log(newProd.getInformation());
