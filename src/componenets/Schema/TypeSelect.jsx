
import getType from '../../helpers/getType'
import React, { useState, useEffect } from 'react'


const TypeSelect = ({ schemaItem, setSchema, label}) => {
    const [currentSchema, setCurrentSchema] = useState(schemaItem)

// useEffect(() => {
//     console.log(schemaItem);
// }, [schemaItem])

    return (
        <>
            <label htmlFor='type'>
                {label}
            </label>
            <select
                type='text'
                id='type'
                name='type'
                value={getType(schemaItem)}
            >
                <option value='string'>String</option>
                <option value='number'>Number</option>
                <option value='boolean'>Boolean</option>
                <option value='array'>Array</option>
                <option value='object'>Object</option>
                <option value='uuid'>Uuid</option>
            </select>
            {getType(schemaItem) === 'array' && (
                <TypeSelect schemaItem={schemaItem[0]} label="Of: "/>
            )}
        </>
    )
}

export default TypeSelect
