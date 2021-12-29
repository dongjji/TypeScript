"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Log(target, propertyName) {
    console.log("Property Decorator");
    console.log(target);
    console.log(propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor Decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
    return {};
}
function Log4(target, name, position) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error("price should be positive");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log,
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    Log2,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Product.prototype, "getPriceWithTax", null);
const pro1 = new Product("Book", 10);
const pro2 = new Product("Book2", 20);
//# sourceMappingURL=app.js.map