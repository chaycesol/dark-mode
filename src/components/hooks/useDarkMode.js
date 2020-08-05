import React from 'react';
import { useLocalStorage } from './useLocalStorage'


export const useDarkMode = (key, initialValues) => {
    const [ darkMode, setDarkMode ] = useLocalStorage(key, initialValues)
    
    return [ darkMode, setDarkMode ]
}