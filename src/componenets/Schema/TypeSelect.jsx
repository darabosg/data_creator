import replaceAt from '../../helpers/replaceAt'
import React, { useState, useEffect } from 'react'
import SchemaInput from './ShemaInput'
import { produce } from 'immer'

const TypeSelect = ({ field, label, aboveSchema, setAboveSchema, index }) => {
    const [currentValue, setCurrentValue] = useState(field)


  


    const childrenSetter = (state) => setCurrentValue({...currentValue, children: state})

    useEffect(() => {
        //WHY DID I DO THIS???
        // if (currentValue.type !== 'array' || currentValue.type !== 'object') {
            setAboveSchema(replaceAt(aboveSchema, index, currentValue))
        // }
    }, [currentValue])

    const changeType = e => {
        if (e.target.value === 'array') {
            setCurrentValue({
                ...field,
                type: e.target.value,
                children: [{ type: 'string' }],
            })
        } else if (e.target.value === 'object') {
            setCurrentValue({
                ...field,
                type: e.target.value,
                children: [{ key: 'YOUR_KEY', type: 'string' }],
            })
        } else {
              setCurrentValue({
                  ...field,
                  type: e.target.value,
              })
        }
    }

    return (
        <>
            <label htmlFor='type'>{label}</label>
            <select
                type='text'
                id='type'
                name='type'
                value={currentValue.type}
                onChange={changeType}
            >
                <option value='string'>String</option>
                <option value='number'>Number</option>
                <option value='boolean'>Boolean</option>
                <option value='array'>Array</option>
                <option value='object'>Object</option>
                <option value='uuid'>Uuid</option>
            </select>
            {currentValue.type === 'array' && (
                <TypeSelect
                    index={0}
                    setAboveSchema={childrenSetter}
                    aboveSchema={currentValue.children}
                    field={currentValue.children[0]}
                    label='Of: '
                />
            )}
            {currentValue.type === 'object' && (
                <SchemaInput
                    schema={currentValue.children}
                    setSchema={childrenSetter}
                />
            )}
        </>
    )
}

export default TypeSelect
