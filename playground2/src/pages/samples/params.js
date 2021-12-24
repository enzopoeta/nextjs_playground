import { useRouter } from "next/router";
import  Link  from "next/link";

const ParamsPage = function (props) {

    const router = useRouter();
    
    return (
        <>
            <h1> Valor do parametro id = {router.query.id}</h1>
            <Link href="/samples/navigation"><button>Back to navigation</button></Link>
        </>
    )
}

export default ParamsPage