import React from 'react'
import './SingleInput.css'
import getType from '../../helpers/getType'

const SingleInput = ({ value, setData }) => {
    const change = e => {
        switch (getType(value)) {
            case 'number':
                setData(Number(e.target.value))
                break
            case 'boolean':
                setData(e.target.value === 'true' ? true : false)
                break
            default:
                setData(e.target.value)
                break
        }
    }

    return (
        <div>
            {getType(value) === 'string' && (
                <input
                    className='single-input'
                    value={value}
                    type='text'
                    onChange={change}
                />
            )}
            {getType(value) === 'number' && (
                <input
                    className='single-input'
                    value={value}
                    type='number'
                    onChange={change}
                />
            )}
            {getType(value) === 'uuid' && (
                <input
                    className='single-input'
                    type='text'
                    readOnly
                    value={value}
                />
            )}

            {getType(value) === 'boolean' && (
                <>
                    <label htmlFor='false'>False</label>
                    <input
                        type='radio'
                        id='false'
                        value='false'
                        checked={!value}
                        onChange={change}
                    />
                    <label htmlFor='true'>True</label>
                    <input
                        type='radio'
                        id='true'
                        value='true'
                        checked={value}
                        onChange={change}
                    />
                </>
            )}
        </div>
    )
}

export default SingleInput
