import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to='/create'><button>Create data</button></Link>
            <Link to='/search'><button>Search in data</button></Link>
        </div>
    )
}

export default Home
