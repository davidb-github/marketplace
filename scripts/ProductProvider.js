let products = []

export const useProducts = () => {
    return products.slice()
}

export const getProducts = () => {
 return fetch("http://localhost:8088/products")
    .then(res => res.json())
    .then(parsedProducts => products = parsedProducts)
}
