import './App.css'
import React, { useState, useEffect } from 'react'
import Schema from './componenets/Schema/Schema'
import Inputs from './componenets/Inputs/Inputs'
import Output from './componenets/Output/Output'
// import a from './draftdata'
import initData from './helpers/initData'

function App() {
    const [displayInputs, setDisplayInputs] = useState(false)
    const [displayOutput, setDisplayOutput] = useState(false)
    const [schema, setSchema] = useState([
        { key: 'id', type: 'uuid' },
        { key: 'your_key_2', type: 'string' },
    ])
    const [newData, setNewData] = useState(null)
    const [data, setData] = useState([])

    useEffect(() => {
        setNewData(prev=>initData(schema, prev))
    }, [schema])


    const switchInputs = () => {
        setDisplayInputs(!displayInputs)
    }
    const switchOutput = () => {
        setDisplayOutput(!displayOutput)
    }

    return (
        <div className='App'>
            <div className='flex'>
                <div className='flex-container'>
                    {displayInputs ? (
                        <Inputs
                            schema={schema}
                            setData={setData}
                            newData={newData}
                            setNewData={setNewData}
                        />
                    ) : (
                        <Schema schema={schema} setSchema={setSchema} />
                    )}<button onClick={switchInputs}>
                        {displayInputs
                            ? '<-- Back to the schema'
                            : 'Show me my inputs -->'}
                    </button>
                    
                </div>

                <div className='flex-container'>
                    {displayOutput ? (
                        <Output setData={setData} data={data} />
                    ) : (
                        <Output data={newData} />
                    )}
                    <button onClick={switchOutput}>
                        {displayOutput
                            ? '<-- Show current data'
                            : 'Show the data array -->'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
