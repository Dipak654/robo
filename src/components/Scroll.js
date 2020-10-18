import React from 'react'

const Scroll = (props) => {
    return (
        <div style= {{ overflow: 'scroll', border: '5px solid rgba(15,195,98,0.6)', height: '800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll