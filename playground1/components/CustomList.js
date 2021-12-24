import React from 'react';

// converncao de nome do componente igual ao java
const CustomListComponent=  function (props) { // as propriedades passadas como tag do componente vem dentro deste objeto
    // JSX
    
    return (
        <>
            <ul>{ props.children }</ul>
        </>
    )


}


export default CustomListComponent;