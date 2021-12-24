import React from 'react';
import Child from "./Child"

// converncao de nome do componente igual ao java
const ParentComponent=  function (props) { // as propriedades passadas como tag do componente vem dentro deste objeto
    // JSX

    function parentFunction(e,text) {
        console.log(e);
        console.log("Parametro texto "+text);
    }
    
    return (
        <>
            <Child funct={parentFunction}></Child>
            
            
        </>
    )


}


export default ParentComponent