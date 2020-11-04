let types = []

export const useProductTypes = () => {
    return types.slice()
}

export const getProductTypes = () => {
    return fetch("http://localhost:8088/producttypes")
    .then(res => res.json())
    .then(parsedTypes => types = parsedTypes)
}
