import React, { useState } from 'react'
import beautify from 'json-beautify'

const WholeData = ({data}) => {
  const [lineLength, setLineLength] = useState(50)

const copyData = () => {
    navigator.clipboard.writeText(beautify(data, null, 2, lineLength))
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
            <button onClick={copyData}>Copy</button>
            <textarea
                className='output-area'
                readOnly
                cols='30'
                value={beautify(data, null, 2, lineLength)}
                rows='30'
            ></textarea>
        </div>
    )
}


export default WholeData
