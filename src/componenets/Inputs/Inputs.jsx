import React from 'react'
import DataHub from './DataHub'
import initData from '../../helpers/initData'

const Inputs = ({schema, setData, newData, setNewData }) => {
    
    const addToData = (e) => {
        e.preventDefault()
        setData(prev=>[...prev,newData])
setNewData(initData(schema, newData))
    }

    return (
        <div>
            <h1>Your inputs</h1>
            <button onClick={()=>setNewData(initData(schema, newData))}>
                Clear All
            </button>
            <form onSubmit={addToData}>
                <DataHub data={newData} setData={setNewData} />
                <input type='submit' value='Add to data array' />
            </form>
        </div>
    )
}

export default Inputs
