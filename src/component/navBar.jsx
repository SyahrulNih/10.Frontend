import Link from "next/link";

function NavBar() {
    return ( 
        <>
            <div className="flex justify-left gap-4 mx-8">
                <Link href="/">
                    <div className="text-xl underline hover:text-blue-900 cursor-pointer">
                        Home
                    </div>
                </Link>
                <Link href="/about">
                    <div className="text-xl underline hover:text-blue-900 cursor-pointer">
                        About
                    </div>
                </Link>
                <Link href="/content">
                    <div className="text-xl underline hover:text-blue-900 cursor-pointer">
                        Content
                    </div>
                </Link>
            </div>
        </>
     );
}

export default NavBar;