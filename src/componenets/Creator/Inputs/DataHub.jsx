import React from 'react'
import getType from '../../../helpers/getType'
import ArrayInputs from './ArrayInputs'
import ObjectInputs from './ObjectInputs'
import SingleInput from './SingleInput'

const DataHub = ({ data, setData }) => {
    return (
        <div>
            {getType(data) === 'object' && (
                <ObjectInputs data={data} setData={setData} />
            )}
            {getType(data) === 'array' && (
                <ArrayInputs data={data} setData={setData} />
            )}
            {getType(data) !== 'object' && getType(data) !== 'array' && (
                <SingleInput value={data} setData={setData} />
            )}
        </div>
    )
}

export default DataHub
