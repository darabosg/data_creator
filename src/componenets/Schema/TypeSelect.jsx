import replaceAt from '../../helpers/replaceAt'
import React from 'react'
import SchemaInput from './ShemaInput'

const TypeSelect = ({
    field,
    label,
    aboveSchema,
    setAboveSchema,
    index,
    objectDepth,
    arrayDepth,
}) => {
    const childrenSetter = state =>
        setAboveSchema(
            replaceAt(aboveSchema, index, { ...field, children: state })
        )

    const changeType = e => {
        if (e.target.value === 'array') {
            setAboveSchema(
                replaceAt(aboveSchema, index, {
                    ...field,
                    type: e.target.value,
                    children: [{ key: 0, type: 'string' }],
                })
            )
        } else if (e.target.value === 'object') {
            setAboveSchema(
                replaceAt(aboveSchema, index, {
                    ...field,
                    type: e.target.value,
                    children: [{ key: 'YOUR_KEY', type: 'string' }],
                })
            )
        } else {
            setAboveSchema(
                replaceAt(aboveSchema, index, {
                    ...field,
                    type: e.target.value,
                })
            )
        }
    }

    return (
        <>
            <label htmlFor='type'>{label}</label>
            <select
                type='text'
                id='type'
                name='type'
                value={field.type}
                onChange={changeType}
            >
                <option value='string'>String</option>
                <option value='number'>Number</option>
                <option value='boolean'>Boolean</option>
                {arrayDepth > 0 && <option value='array'>Array</option>}
                {objectDepth > 0 && <option value='object'>Object</option>}

                <option value='uuid'>Uuid</option>
            </select>
            {field.type === 'array' && (
                <TypeSelect
                    arrayDepth={arrayDepth - 1}
                    objectDepth={objectDepth}
                    index={0}
                    setAboveSchema={childrenSetter}
                    aboveSchema={field.children}
                    field={field.children[0]}
                    label='Of: '
                />
            )}
            {field.type === 'object' && (
                <SchemaInput
                    arrayDepth={arrayDepth}
                    objectDepth={objectDepth - 1}
                    schema={field.children}
                    setSchema={childrenSetter}
                />
            )}
        </>
    )
}

export default TypeSelect
