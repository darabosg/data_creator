import { v4 as uuidv4 } from 'uuid'
import getType from './getType'

const initData = (schema, newData) => {
    const initialData = {}

    const getEmptyValue = item => {
        switch (item.type) {
            case 'string':
                return ''
            case 'number':
                return 0
            case 'boolean':
                return false
            case 'uuid':
                return uuidv4()
            case 'array':
                return []
            case 'object':
                return {}
            default:
                break
        }
    }

    const isTypeChanged = (schemaType, data) => schemaType !== getType(data)

    const isThereData = Boolean(newData)

    // console.log(isThereData)

    const getValue = (item, data) => {
        if (isTypeChanged(item.type, data)) {
            return getEmptyValue(item)
        } else {
            return data[item.key]
        }
    }



    const makeInitialData = (schema, data) => {
        schema.forEach(item => {
            if (item.type === 'array' || item.type === 'object') {
                data[item.key] = isThereData
                    ? getValue(item, data[item.key])
                    : getEmptyValue(item)
                makeInitialData(item.children, data[item.key])
            } else {
                data[item.key] = getValue(item, data[item.key])
            }
        })
    }

    makeInitialData(schema, initialData)

    return initialData
}

export default initData
