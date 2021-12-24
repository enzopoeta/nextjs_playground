// estrutura básica de uma página Next ( mesma de um componente react)
import React from 'react'; // no next e nas versoes mais niovas do react nao eh preciso mimportar o react
import CustomList from '../../components/CustomList';
import CustomListItem from '../../components/CustomListItem';


// converncao de nome do componente igual ao java
const ComponentWithChildsPage = function () { // o nome do arquivo nao precisa ser o mesmo da funcao

    

    return (
        <> {/* como no vue os jsx precisa estar contido numa enclosing tag.. para nao "gastar um div atoa podemos usar a sintaxe de fragment"*/}
    
    
            <CustomList>
                    <CustomListItem content="conteudo 1"></CustomListItem>
                    <CustomListItem content="conteudo 2"></CustomListItem>
                    <CustomListItem content="conteudo 3"></CustomListItem>
            </CustomList>
                
            

        </>
    )
} 


export default ComponentWithChildsPage 