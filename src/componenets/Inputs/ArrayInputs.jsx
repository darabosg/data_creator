import React from 'react'
import replaceAt from '../../helpers/replaceAt'
import DataHub from './DataHub'
import clearData from '../../helpers/clearData'
import './ArrayInputs.css'

const ArrayInputs = ({ data, setData }) => {
    const childrenSetter = index => state =>
        setData(replaceAt(data, index, state))

    const addToArray = () => {
        let clear = clearData(data[0])
        setData([...data, clear])
    }

    return (
        <div className='rel'>
            <div className='input-array'>
                {/* <InputLabel  of={getType(data[0])}/> */}
                {data.map((item, i) => (
                    <DataHub key={i} data={item} setData={childrenSetter(i)} />
                ))}
                <button className='add-to-array' onClick={addToArray}>+</button>
            </div>
        </div>
    )
}

export default ArrayInputs
