import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import './DataInput.css'

const getInputType = type => {
    switch (type) {
        case 'number':
            return 'number'
        case 'string':
            return 'text'

        default:
            break
    }
}


const isInput = type => {
    return (type === 'string' || type === 'number')
}
const isBoolean = type => {
    return (type === 'boolean')
}
const isId = type => {
    return (type === 'uuid')
}
const isObject = type => {
    return (type === 'object')
}
const isArray = type => {
    return (type === 'array')
}

const DataInput = ({ schema }) => {

const change = () => {

}


    return (
        <div className='input-object'>
            {schema.map((field, i) => (
                <div key={i}>
                    <div>
                        <label htmlFor={field.key}>
                            {field.key} ({field.type})
                        </label>
                    </div>
                    {isInput(field.type) && (
                        <input
                            value={field.value}
                            name={field.key}
                            type={getInputType(field.type)}
                        />
                    )}
                    {isId(field.type) && (
                        <input
                            name={field.key}
                            type='text'
                            readOnly
                            value={field.value}
                        />
                    )}
                    {isBoolean(field.type) && (
                        <>
                            <label htmlFor='false'>False</label>
                            <input
                                name={field.key}
                                type='radio'
                                id='false'
                                checked={!field.value}
                                value={field.value}
                            />
                            <label htmlFor='true'>True</label>
                            <input
                                name={field.key}
                                type='radio'
                                id='true'
                                checked={field.value}
                            />
                        </>
                    )}
                    {isObject(field.type) && (
                        <DataInput schema={field.children} />
                    )}
                    {isArray(field.type) && (
                        <DataInput schema={field.children} />
                    )}
                </div>
            ))}
        </div>
    )
}

export default DataInput
