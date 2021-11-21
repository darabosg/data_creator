import './SchemaInput.css'
import TypeSelect from './TypeSelect'
import replaceAt from '../../helpers/replaceAt'
import React from 'react'

const SchemaInput = ({ schema, setSchema, objectDepth,arrayDepth }) => {
    const changeKey = e => (index, field) => {
        const newField = { ...field, key: e.target.value }
        setSchema(replaceAt(schema, index, newField))
    }

    const addField = () => {
        setSchema([...schema, { key: 'YOUR_KEY_'+(schema.length+1), type: 'string', value: '' }])
    }

    const deleteField = index => {
        console.log(index)
        setSchema(schema.filter((_, i) => i !== index))
    }

    return (
        <div className='schema-object'>
            {schema.map((field, i) => (
                <div className='schema-input-container' key={field + i}>
                    <button onClick={() => deleteField(i)}>---</button>
                    <label htmlFor='key'>Key: </label>
                    <input
                        className='schema-input'
                        type='text'
                        id='key'
                        name='key'
                        value={field.key}
                        onChange={e => changeKey(e)(i, field)}
                    />
                    <TypeSelect
                        objectDepth={objectDepth}
                        arrayDepth={arrayDepth}
                        index={i}
                        setAboveSchema={setSchema}
                        aboveSchema={schema}
                        field={field}
                        label='Type: '
                    />
                </div>
            ))}
            <button onClick={addField}>Add</button>
        </div>
    )
}

export default SchemaInput
