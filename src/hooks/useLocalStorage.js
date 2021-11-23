import { useState, useEffect } from 'react'

const useLocalStorage = (key, defaultValue) => {
    const initial = JSON.parse(localStorage.getItem(key)) || defaultValue
    const [value, setValue] = useState(initial)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export default useLocalStorage
