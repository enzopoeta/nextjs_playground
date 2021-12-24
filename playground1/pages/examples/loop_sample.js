// estrutura básica de uma página Next ( mesma de um componente react)
import React from 'react'; // no next e nas versoes mais niovas do react nao eh preciso mimportar o react
import ProductList from "../../data/productList";




function renderList() {
    
    
    
    return ProductList.map(product => {
        
        /*
        console.log(product);
        console.log(product.id);
        console.log(product.pname);
        console.log(product.price);
        */
        return (<h1 key={product.id}>
            {product.id} {product.pname} {product.price}
        </h1>)
    })
}



// converncao de nome do componente igual ao java
const LoopSamplePage = function () { // o nome do arquivo nao precisa ser o mesmo da funcao

    

    return (
        <> {/* como no vue os jsx precisa estar contido numa enclosing tag.. para nao "gastar um div atoa podemos usar a sintaxe de fragment"*/}
    
    
            
                {renderList()}
            

        </>
    )
} 


export default LoopSamplePage 