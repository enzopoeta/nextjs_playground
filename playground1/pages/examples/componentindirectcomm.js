// estrutura básica de uma página Next ( mesma de um componente react)
import React from 'react'; // no next e nas versoes mais niovas do react nao eh preciso mimportar o react
import ParentComponent from '../../components/indirect_communication/Parent';

// converncao de nome do componente igual ao java
const ComponentIndirectComm = function () { // o nome do arquivo nao precisa ser o mesmo da funcao

    

    return (
        <> {/* como no vue os jsx precisa estar contido numa enclosing tag.. para nao "gastar um div atoa podemos usar a sintaxe de fragment"*/}
    
    
            <ParentComponent text="Enzo Poeta"/>                
            

        </>
    )
} 


export default ComponentIndirectComm