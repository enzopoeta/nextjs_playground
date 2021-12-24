import React from 'react';

// converncao de nome do componente igual ao java
const TitleComponent=  function (props) { // as propriedades passadas como tag do componente vem dentro deste objeto
    // JSX
    
    return (
        <>
        <h1>{props.main}</h1>
        <h2>{props.sub}</h2>
        </>
    )


}


export default TitleComponent