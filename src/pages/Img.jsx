import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Img = ({ url }) => {
    const [img, setImg] = useState('')

    useEffect(() => {
        axios
            .get(
                `http://localhost:5000/?url=${url}`
                // ,{ responseType: 'blob' }
            )
            .then(response => {
                // console.log(response.data);
                setImg(response.data)
                // setImg(URL.createObjectURL(new Blob([response.data])))
            })
            .catch(err => console.error(err))
    }, [url])

    useEffect(() => {
        console.log(img)
    }, [img])

    return <div style={{height: 250}}>{img && <img src={img} alt='alt' />}</div>
}

export default Img
