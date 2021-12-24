import React from 'react';

// converncao de nome do componente igual ao java
const ChildComponent=  function (props) { // as propriedades passadas como tag do componente vem dentro deste objeto
    // JSX
    
    return (
        <>
            <button onClick={props.funct}>chamando funcao do pai sem parametro</button>
            <button onClick={(e) => { props.funct(e,"Valor do parametro") }}>chamando funcao do pai com parametro</button>
        </>
    )


}


export default ChildComponent