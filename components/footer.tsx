import FooterDivide from "./footerDivide";

export default function Navbar(){
    return(
        <div>
            <FooterDivide/>
            <footer className='flex-1 px-5 py-11 justify-center text-lg align-middle text-center content-center self-center bg-matte-darkgrey text-white'>
                <a target="_blank" rel="noopener noreferrer">
                    Created by Jake Chappell
                </a>
            </footer>
        </div>
    )
}