// estrutura básica de uma página Next ( mesma de um componente react)
import React from 'react'; // no next e nas versoes mais niovas do react nao eh preciso mimportar o react

/*
    Para usar diretamente os styles css e preciso converter para camel case 
    e passar as a propriedades como um objeto json

*/



// converncao de nome do componente igual ao java
const UsingCssPage = function () { // o nome do arquivo nao precisa ser o mesmo da funcao


 
    return (
        <div >
            <div style={{ color: "#f30" }}><h1>Red</h1></div>
            <div style={{ color: "#03a" }}><h1>Blue</h1></div>
            <div style={{backgroundColor: "#666",  color: "#fff"}}><h1>White</h1></div>
        </div>
    )
}





export default UsingCssPage