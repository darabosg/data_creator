
const getType = value => {
    if (Array.isArray(value)) {
        return 'array'
    } else if (typeof value === 'string') {
        if (
            value.match(
                /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/
            )
        ) {
            return 'uuid'
        } else {
            return 'string'
        }
    } else {
        return typeof value
    }
}

export default getType