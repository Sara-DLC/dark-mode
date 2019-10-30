import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
const [inputValue, setInputValue] = useLocalStorage (initialValue);


const onChange = newValue => {
    setInputValue(newValue);
};

useEffect( ()=> {
    const body = window.document.body;

    return inputValue ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    
}, [inputValue]);


    return [inputValue, setInputValue, onChange];
}
