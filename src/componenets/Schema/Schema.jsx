import React from 'react'
import ShemaInput from './ShemaInput'

const Schema = ({schema, setSchema}) => {




    return (
        <div>
            <h1>Create your schema</h1>
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
