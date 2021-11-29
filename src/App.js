import './App.css'
import React from 'react'
import Home from './pages/Home'
import Creator from './pages/Creator'
// import Searcher from './pages/Searcher'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/create' element={<Creator />} />
                    {/* <Route path='/search' element={<Searcher />} /> */}
                </Routes>
            </Router>
        </div>
    )
}

export default App
