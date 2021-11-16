import replaceAt from '../../helpers/replaceAt'
import React from 'react'
import SchemaInput from './ShemaInput'
import { v4 as uuidv4 } from 'uuid'

const TypeSelect = ({ field, label, aboveSchema, setAboveSchema, index }) => {

    const childrenSetter = (state) => setAboveSchema(replaceAt(aboveSchema, index, {...field, children: state}))

    const changeType = e => {
        if (e.target.value === 'array') {
            setAboveSchema(
                replaceAt(aboveSchema, index, {
                    ...field,
                    type: e.target.value,
                    children: [{ type: 'string', value: '' }],
                })
            )
        } else if (e.target.value === 'object') {
            setAboveSchema(
                replaceAt(aboveSchema, index, {
                    ...field,
                    type: e.target.value,
                    children: [{ key: 'YOUR_KEY', type: 'string', value: '' }],
                })
            )
        } else if (e.target.value === 'string') {
            setAboveSchema(
                replaceAt(aboveSchema, index, {
                    ...field,
                    type: e.target.value,
                    value: '',
                })
            )
        } else if (e.target.value === 'number') {
            setAboveSchema(
                replaceAt(aboveSchema, index, {
                    ...field,
                    type: e.target.value,
                    value: Number,
                })
            )
        } else if (e.target.value === 'boolean') {
            setAboveSchema(
                replaceAt(aboveSchema, index, {
                    ...field,
                    type: e.target.value,
                    value: false,
                })
            )
        } else {
            setAboveSchema(
                replaceAt(aboveSchema, index, {
                    ...field,
                    type: e.target.value,
                    value: uuidv4(),
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
                <option value='array'>Array</option>
                <option value='object'>Object</option>
                <option value='uuid'>Uuid</option>
            </select>
            {field.type === 'array' && (
                <TypeSelect
                    index={0}
                    setAboveSchema={childrenSetter}
                    aboveSchema={field.children}
                    field={field.children[0]}
                    label='Of: '
                />
            )}
            {field.type === 'object' && (
                <SchemaInput
                    schema={field.children}
                    setSchema={childrenSetter}
                />
            )}
        </>
    )
}

export default TypeSelect
