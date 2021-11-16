import './App.css'
import React, { useState, useEffect } from 'react'
import Schema from './componenets/Schema/Schema'
import Inputs from './componenets/Inputs/Inputs'
import Output from './componenets/Output'
import a from './draftdata'

function App() {
    const [schema, setSchema] = useState(a)
    const [data, setData] = useState({})

    useEffect(() => {
        console.log(schema)
    }, [schema])

    return (
        <div className='App'>
            <Schema schema={schema} setSchema={setSchema} />
            <Inputs schema={schema} setData={setData} />
            <Output data={data} />
        </div>
    )
}

export default App
