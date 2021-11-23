import './Output.css'
import beautify from 'json-beautify'
import React, { useState } from 'react'

const Output = ({ data, setData }) => {
    const [lineLength, setLineLength] = useState(50)
    const [indentation, setIndentation] = useState(4)

    const copyData = () => {
        navigator.clipboard.writeText(
            beautify(data, null, indentation, lineLength)
        )
    }

    const clearData = () => {
        setData([])
    }

    return (
        <div className='output-container'>
            <h1>Output</h1>
            <label htmlFor='line-length'>Line length</label>
            <input
                type='range'
                id='line-length'
                max={50}
                min={0}
                value={lineLength}
                onChange={e => setLineLength(Number(e.target.value))}
            />
            <label htmlFor='indentation'>Indentation</label>
            <input
                type='range'
                id='indentation'
                max={8}
                min={2}
                step='2'
                value={indentation}
                onChange={e => setIndentation(Number(e.target.value))}
            />
            <span>{indentation}</span>
            <button onClick={copyData}>Copy</button>
            {setData && <button onClick={clearData}>Clear</button>}
            
            <textarea
                className='output-area'
                readOnly
                cols='30'
                value={beautify(data, null, indentation, lineLength)}
                rows='30'
            ></textarea>
        </div>
    )
}

export default Output
