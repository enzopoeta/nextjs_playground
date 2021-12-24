// estrutura básica de uma página Next ( mesma de um componente react)
import React from 'react'; // no next e nas versoes mais niovas do react nao eh preciso mimportar o react
import Title from "../../components/Title";
// converncao de nome do componente igual ao java
const UsingComponentsPage = function () { // o nome do arquivo nao precisa ser o mesmo da funcao
    // JSX
 
 
    return (
        <>
            <Title main="Titulo principal" sub="Subtitulo"/>
            <h3> using components !!! </h3>
        </>
    )
}





export default UsingComponentsPage