import { useRouter } from "next/router"

export default function Navbar(){
    const router = useRouter();
    return(
        <nav className='top-0 flex justify-between items-center py-6 px-8 md:px-14 lg:px-24 w-full bg-matte-grey shadow-xl'>
            <div className='text-2xl font-bold text-white'>Riffs Anonymous</div>
            <div className='flex space-x-12 items-center'>
                {router.pathname === "/" ? <a href='/edit' className='text-white'>Edit</a> : <a href='/' className='text-white'>Home</a>}
            </div>
        </nav>
    )
}