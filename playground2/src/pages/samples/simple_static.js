

export function getStaticProps() {
    return {
        props: {
            number: Math.round(Math.random() * 9999)
        }

    }

    
}



const SimpleStaticPage = function (props) {

    
    
    return (
        <>
            <h1> Numero aleatorio gerado : {props.number}</h1>
        </>
    )
}

export default SimpleStaticPage