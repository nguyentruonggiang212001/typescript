"use strict";
let productA = { title: "tivi", price: 200 };
var ProductsSize;
(function (ProductsSize) {
    ProductsSize[ProductsSize["S"] = 0] = "S";
    ProductsSize[ProductsSize["M"] = 1] = "M";
    ProductsSize[ProductsSize["L"] = 2] = "L";
    ProductsSize[ProductsSize[" XL"] = 3] = " XL";
    ProductsSize[ProductsSize["XXl"] = 4] = "XXl";
})(ProductsSize || (ProductsSize = {}));
