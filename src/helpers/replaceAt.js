const replaceAt = (array, index, value) => {
    const copy = array.slice(0)
    copy[index] = value
    return copy
}

export default replaceAt
