import React, { useRef } from 'react'
import './SingleInput.css'
import getType from '../../../helpers/getType'

const SingleInput = ({ value, setData }) => {
    const textInput = useRef()

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
                textInput.current.focus()
                break
        }
    }

    const getRows = length => {
        if (length === 0) {
            return 1
        } else {
            let rows = Math.ceil(length / 33)
            return rows < 7 ? rows : 6
        }
    }

    return (
        <div>
            {getType(value) === 'string' && (
                // <>
                //     {value.length < 33 ? (
                //         <input
                //             ref={textInput}
                //             className='single-input'
                //             value={value}
                //             type='text'
                //             onChange={change}
                //             // autoFocus
                //         />
                //     ) : (
                <textarea
                    ref={textInput}
                    // autoFocus
                    className='single-textarea'
                    rows={getRows(value.length)}
                    onChange={change}
                    value={value}
                />
                // )}
                // </>
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
