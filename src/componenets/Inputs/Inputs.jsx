import DataInput from './DataInput'
import React, { useState, useEffect } from 'react'


const Inputs = ({schema, setData}) => {
// const [newData, setNewData] = useState({})


// const makeInitialData = () => {
// setNewData(

// )
// }

// useEffect(() => {
    

// }, [])

    return (
        <div>
            <h1>Your inputs</h1>
            <DataInput schema={schema}/>
        </div>
    )
}

export default Inputs
