import { useRouter } from "next/router";


const DinamicRoutePage = function (props) {

    const router = useRouter();
    
    return (
        <h1>samples/dynamic_route/{router.query.id}/dinamic_route(final_estatico)</h1>
    )
}

export default DinamicRoutePage