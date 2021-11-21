import getType from './getType'
import { v4 as uuidv4 } from 'uuid'

const clearData = data => {
    let emptyData

    const getValue = item => {
        switch (getType(item)) {
            case 'array':
                return []
            case 'object':
                return {}
            case 'string':
                return ''
            case 'number':
                return 0
            case 'boolean':
                return false
            case 'uuid':
                return uuidv4()
            default:
                break
        }
    }

    if (getType(data) === 'array') {
        emptyData = [...data]
    } else if (getType(data) === 'object') {
        emptyData = { ...data }
    } else {
        return getValue(data)
    }

    const makeEmpty = (data, empty) => {
        switch (getType(data)) {
            case 'object':
                Object.keys(data).forEach(key => {
                    empty[key] = getValue(data[key])
                    makeEmpty(data[key], empty[key])
                })
                break
            case 'array':
                data.forEach((item, i) => {
                    empty[i] = getValue(data[i])
                    makeEmpty(item, empty[i])
                })
                break
            default:empty = getValue(data)
                break
        }
    }

    makeEmpty(data, emptyData)

    return emptyData
}

export default clearData
