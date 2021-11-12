const getType = (item) => {
    return Array.isArray(item)
        ? 'array'
        : typeof item === 'object'
        ? 'object'
        : item
}

export default getType