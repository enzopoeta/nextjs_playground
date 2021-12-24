import React from 'react';
import Child from "./Child"

// converncao de nome do componente igual ao java
const ParentComponent=  function (props) { // as propriedades passadas como tag do componente vem dentro deste objeto
    // JSX
    
    return (
        <>
            <Child text="AAA"></Child>
            <Child text="BBB"></Child>
            <Child text="CCC"></Child>

            <Child {...props}></Child> { /* A sintaxe de "spread" passa todas as props do componente pai para o filho so que sobrepoe qq propriedade ja existente nele   */}
        </>
    )


}


export default ParentComponent