import React from 'react'
import replaceAt from '../../../helpers/replaceAt'
import DataHub from './DataHub'
import clearData from '../../../helpers/clearData'
import './ArrayInputs.css'

const ArrayInputs = ({ data, setData }) => {
    const childrenSetter = index => state =>
        setData(replaceAt(data, index, state))

    const addToArray = () => {
        let clear = clearData(data[0])
        setData([...data, clear])
    }

    const deleteArrayItem = (index) => {
setData(data.filter((_,i)=>i!==index))
    }

    return (
        <div className='rel'>
            <div className='input-array'>
                <fieldset>
                    <legend>array</legend>
                    {data.map((item, i) => (
                        <div className='input-from-array'>
                            <DataHub
                                key={i}
                                data={item}
                                setData={childrenSetter(i)}
                            />
                            {i !== 0 && (
                                <button
                                    onClick={()=>deleteArrayItem(i)}
                                    className='icon-button red'
                                >
                                    -
                                </button>
                            )}
                        </div>
                    ))}
                    <button className='icon-button green' onClick={addToArray}>
                        +
                    </button>
                </fieldset>
            </div>
        </div>
    )
}

export default ArrayInputs
