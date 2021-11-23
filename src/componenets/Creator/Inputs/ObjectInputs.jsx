import getType from '../../../helpers/getType'
import React from 'react'
import DataHub from './DataHub'
import InputLabel from './InputLabel'
import './ObjectInputs.css'

const ObjectInputs = ({ data, setData }) => {
    const childrenSetter = dataKey => state =>
        setData({ ...data, [dataKey]: state })

    return (
        <>
            {data && (
                <div className='rel'>
                    <div className='input-object'>
                        <fieldset>
                            <legend>object</legend>
                        {Object.keys(data).map((dataKey, i) => {
                            return (
                                <div key={i} className='object-label'>
                                    <div className='label'>
                                        <InputLabel
                                            type={getType(data[dataKey])}
                                            labelKey={dataKey}
                                        />
                                    </div>

                                    <DataHub
                                        data={data[dataKey]}
                                        setData={childrenSetter(dataKey)}
                                    />
                                </div>
                            )
                        })}</fieldset>
                    </div>
                </div>
            )}
        </>
    )
}

export default ObjectInputs
