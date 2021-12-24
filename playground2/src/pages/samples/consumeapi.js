import { useState,useEffect } from "react";



const ConsumeAPIPage = function (props) {

    /*
     * Para fazer o fetch de requisicoes web tem varios jeitos (hooks)
     * 
     * por exemplo pode ser via o hook getinitialProps que transforma o resultado do fetch em properties
     * ou por meio do  useEffect que executa a atualizacao apos o carregamento do DOM
     * 
     * 
     */
    const [userState, setUserState] = useState({});

    useEffect(
        () => {
            fetch("http://localhost:3000/api/sample/1909000/sample?teste=1").
                then(response => response.json()).then(setUserState)}, [])

    function changeCode()  {
        let aNumber= Math.floor(Math.random() * 9999);    
        fetch("http://localhost:3000/api/sample/"+aNumber+"/sample?teste=1").
                then(response => response.json()).then(setUserState)}

    
    function renderRoles(fromObject) {
        return fromObject.roles.map((role,i) => {
            return (

                <li key={i}>{role}</li>
            )

        })
    }

    

    
    
    return (
        <>
            <h1>FETCH a partir de getInitialProps</h1>
            <h1>User - {props.name}</h1>
            <h1>code - { props.code}</h1>
            <h2>Roles</h2>
            <ul>
                {renderRoles(props)}
            </ul>

            <hr></hr>

            <h1>FETCH a partir de useEffect</h1>
            <h1>User - {userState.name} - {console.log(userState) }</h1>
            <h1>code - {userState.code}</h1>
            <h2>Roles</h2>
            <ul>
                {renderRoles(userState)}
            </ul>

            <hr></hr>
            <button onClick={changeCode}>change code from state with new fetch</button>

        </>
        
    )
}
    
ConsumeAPIPage.getInitialProps = async () => {
        return fetch("http://localhost:3000/api/sample/100/sample?teste=1").then((response => response.json()))

        
    }

export default ConsumeAPIPage