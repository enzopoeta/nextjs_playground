import React from 'react';

// converncao de nome do componente igual ao java
const CustomListItemComponent=  function (props) { // as propriedades passadas como tag do componente vem dentro deste objeto
    // JSX
    
    return (
        <>
            <li><h1>{props.content}</h1></li>
        </>
    )


}


export default CustomListItemComponent;