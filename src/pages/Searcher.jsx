import React, { useState, useEffect } from 'react'
import Img from './Img'

const Searcher = () => {
    const [data, setData] = useState([
        'https://www.jaratlanutakon.hu/wp-content/uploads/2021/09/Balint-F.-Gyula-kmtd-expedicio-5.jpg',
        // 'https://www.jaratlanutakon.hu/wp-content/uploads/2019/10/Tóth-JUF-7.jpg',
        // 'https://www.jaratlanutakon.hu/wp-content/uploads/2020/02/Szűcs-Nóra-114-LI_b.jpg',
        // 'https://www.jaratlanutakon.hu/wp-content/uploads/2018/10/Szendrő-1.jpg',
        // 'https://www.jaratlanutakon.hu/wp-content/uploads/2019/10/Székely-István-min.jpg',
        // 'https://www.jaratlanutakon.hu/wp-content/uploads/2019/02/01_vihar_után-1-e1571250671542.jpg',
        // 'https://www.jaratlanutakon.hu/wp-content/uploads/2019/02/bio-ebéd1.jpg'
        
    ])

   

    

    return (
        <>
            <div>
                {data.map((i, index) => (
                    <Img key={index} url={i} />
                ))}
            </div>
            {/* <div>
                {data.map((i, index) => (
                    <img src={i} alt='alt' />
                ))}
            </div> */}
        </>
    )
}

export default Searcher
