import { getProducts } from "./ProductProvider.js"
import { getProductTypes } from "./ProductTypeProvider.js"
import { ProductList } from "./ProductList.js"

debugger
getProducts()
    .then(getProductTypes)
    .then(ProductList)

