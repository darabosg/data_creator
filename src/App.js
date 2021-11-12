import './App.css'
import React, { useState, useEffect } from 'react'
import Schema from './componenets/Schema/Schema'
import Inputs from './componenets/Inputs'
import Output from './componenets/Output'

function App() {
    const [schema, setSchema] = useState({
        id: 'uuid',
        title: 'string',
        subtitle: 'string',
        traveller: 'string',
        description: 'string',
        day: 'string',
        time: { hour: 'number', min: 'number' },
        room: 'number',
        thumbnail: 'string',
        pisc: ['string'],
    })
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
