import './SchemaInput.css'
import TypeSelect from './TypeSelect'
import getType from '../../helpers/getType'
import React, { useState, useEffect } from 'react'


const ShemaInput = ({ schema, setSchema }) => {
const [currentSchema, setCurrentSchema] = useState(schema)



    return (
        <div>
            {getType(schema) === 'object' && (
                <>
                    {Object.keys(schema).map((attribute, i) => (
                        <div className='schema-input' key={i}>
                            <label htmlFor='name'>Key: </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={attribute}
                            />
                            <TypeSelect
                                label='Type: '
                                schemaItem={schema[attribute]}
                                setSchema={setSchema}
                            />
                            <ShemaInput
                                schema={schema[attribute]}
                                setSchema={setSchema}
                            />
                        </div>
                    ))}
                    <button>Add</button>
                </>
            )}
        </div>
    )
}

export default ShemaInput
