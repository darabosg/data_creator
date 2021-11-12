import React from 'react'
import ShemaInput from './ShemaInput'

const Schema = ({schema, setSchema}) => {




    return (
        <div>
            <h1>Create your schema</h1>
            <ShemaInput schema={schema} setSchema={setSchema} />
            
            
        </div>
    )
}

export default Schema
