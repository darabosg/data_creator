import React from 'react'
import DataHub from './DataHub'
import initData from '../../../helpers/initData'

const Inputs = ({ schema, setData, newData, setNewData }) => {
    const addToData = e => {
        console.log('add to data');
        e.preventDefault()
        setData(prev => [...prev, newData])
        setNewData(initData(schema, newData))
    }

    return (
        <div>
            <h1>Your inputs</h1>
            <button onClick={() => setNewData(initData(schema, newData))}>
                Clear All
            </button>
            {/* <form id='input-form' onSubmit={addToData}> */}
                <DataHub data={newData} setData={setNewData} />
            {/* </form> */}
                <button onClick={addToData}>Add to data array</button>
        </div>
    )
}

export default Inputs
