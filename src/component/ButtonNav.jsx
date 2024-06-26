import { useRouter } from "next/router";

const ButtonNav = () => {
    const router = useRouter()
    return ( 
        <>
         `<div className="flex justify-left gap-4">
            <button onClick={router.push('/')}>
                Home
            </button>
            <button onClick={router.push('/about')}>
                About
            </button>
            <button onClick={router.push('/content')}>
                Content
            </button>
         `</div>   
        </>
     );
}
 
export default ButtonNav;