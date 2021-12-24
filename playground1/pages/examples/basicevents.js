// estrutura básica de uma página Next ( mesma de um componente react)
import React from 'react'; // no next e nas versoes mais niovas do react nao eh preciso mimportar o react


function outsideFunction() { console.log("OUTSIDE FUNCTION");}




// converncao de nome do componente igual ao java
const BasicEventsPage = function () { // o nome do arquivo nao precisa ser o mesmo da funcao

    function insideFunction() { console.log("INSIDE FUNCTION"); }
    

    function receiveEventFunction(e) { console.log("Event Received", e); }
    

    function parameterFunction(a,b) { console.log("Parameters -"+a+", "+b);}

    return (
        <> {/* como no vue os jsx precisa estar contido numa enclosing tag.. para nao "gastar um div atoa podemos usar a sintaxe de fragment"*/}
    
    
            <button onClick={outsideFunction}> Button 1</button><br />
            <button onClick={insideFunction}> Button 2</button><br />
            <button onClick={function(){console.log("INLINE FUNCTION")} }> Button 3</button><br/>
            <button onClick={() => { console.log("Arrow FUNCTION") }}> Button 4</button><br />
            <button onClick={()=>{parameterFunction("param1","param2")}}> Parameter Function</button><br />
            <button onClick={receiveEventFunction}>Show Event</button><br/>

        </>
    )
} 


export default BasicEventsPage