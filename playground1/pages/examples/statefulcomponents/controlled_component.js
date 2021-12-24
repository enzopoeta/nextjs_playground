// estrutura básica de uma página Next ( mesma de um componente react)
import React from 'react'; // no next e nas versoes mais niovas do react nao eh preciso mimportar o react
import { useState } from 'react';



// converncao de nome do componente igual ao java
const ControlledComponentPage = function () { // o nome do arquivo nao precisa ser o mesmo da funcao

    const [field1, setField1] = useState("Initial value");

    return (
        <>
            <input type="text" value={field1} onChange={(e) => {
                setField1(e.target.value)
            }} /> {/* jeito de fazer o two way binding no react ....  bem mais burocratico que no vue*/ }
            <br />
            <h1>State Value : {field1}</h1>

        </>
    )
} 


export default ControlledComponentPage