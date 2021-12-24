import React from 'react';

// converncao de nome do componente igual ao java
const ChildComponent=  function (props) { // as propriedades passadas como tag do componente vem dentro deste objeto
    // JSX
    
    return (
        <>
                <h1> {props.text}</h1>
        </>
    )


}


export default ChildComponent