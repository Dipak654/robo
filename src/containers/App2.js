import React, { useState, useEffect,useRef } from 'react'


function App2() {
    
    const [name, setname] = useState('')
    const count= useRef(0)
    const inputRef = useRef()
    const prevName = useRef('')
    
    useEffect(() => {
        count.current = count.current + 1
        prevName.current = name
    },[name])
    
    function focus() {
        inputRef.current.focus()
    }
    return (
        <div className='App'>
            <input ref={inputRef} type='text' onChange={e => { setname(e.target.value)}} />
    <h1>My name is {name} it used to be {prevName.current}</h1>
            <p>I rendered {count.current} times</p>
            <button onClick={focus}>Focus</button>
        </div>
    )

}
export default App2;