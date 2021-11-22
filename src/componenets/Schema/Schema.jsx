import React from 'react'
import ShemaInput from './ShemaInput'

const Schema = ({schema, setSchema}) => {

const resetSchema=()=>{
    setSchema([
        { key: 'id', type: 'uuid' },
        { key: 'your_key_2', type: 'string' },
    ])
}


    return (
        <div>
            <h1>Create your schema</h1>
            <button onClick={resetSchema}>Reset</button>
            <ShemaInput
                schema={schema}
                setSchema={setSchema}
                objectDepth={4}
                arrayDepth={4}
            />
        </div>
    )
}

export default Schema
