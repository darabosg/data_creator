import './SchemaInput.css'
import TypeSelect from './TypeSelect'
// import getType from '../../helpers/getType'
import React, { useState, useEffect } from 'react'

const SchemaInput = ({ schema, setSchema }) => {


    return (
        <div className='schema-object'>
            {schema.map((field, i) => (
                <div className='schema-input' key={i}>
                    <label htmlFor='key'>Key: </label>
                    <input type='text' id='key' name='key' value={field.key} />
                    <TypeSelect
                    index={i}
                    setAboveSchema={setSchema}
                    aboveSchema={schema}
                        field={field}
                        label='Type: '
                    />
                </div>
            ))}
            <button>Add</button>
        </div>
    )
}

export default SchemaInput
