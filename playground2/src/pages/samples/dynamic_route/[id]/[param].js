import { useRouter } from "next/router";


const DinamicRoutePage = function (props) {

    const router = useRouter();
    
    return (
        <h1>samples/dynamic_route/{router.query.id}/{router.query.param}</h1>
    )
}

export default DinamicRoutePage