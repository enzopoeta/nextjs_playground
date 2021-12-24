import Link from "next/link";
import { useRouter } from "next/router";



const ParamsPage = function (props) {

    const router = useRouter();

    function programmaticNavigation()
    {
        router.push({
            pathname: '/samples/params',
            query: {
                id:"complete object passsed to router"
            }
                
        })
    }
    
    return (
        <>
        <Link href="/samples/params?id=enzo">
            <h1>Go to params page with link</h1>
        </Link>

         
            <h1 onClick={() => router.push("/samples/params?id=router_link")}>Go to params page with Router</h1>
            
            <h1 onClick={() =>programmaticNavigation()}>Go to params page with programmatic nav</h1>
        
        </>
        
    )
}

export default ParamsPage