import './SchemaInput.css'
import TypeSelect from './TypeSelect'
import replaceAt from '../../helpers/replaceAt'
import React, { useState, useEffect } from 'react'

const SchemaInput = ({ schema, setSchema }) => {


    const changeKey =  e => (index, field) => {
        const newField = { ...field, key: e.target.value }
        setSchema(replaceAt(schema, index, newField))
    }

    const addField = () => {
setSchema([...schema,{key:'YOUR_KEY',type:'string'}])
    }

    return (
        <div className='schema-object'>
            {schema.map((field, i) => (
                <div className='schema-input' key={i}>
                    <label htmlFor='key'>Key: </label>
                    <input
                        type='text'
                        id='key'
                        name='key'
                        value={field.key}
                        onChange={(e)=>changeKey(e)(i,field)}
                    />
                    <TypeSelect
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
