import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { NewsLetterDialog } from "./Dialog"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComments} from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
    return(
        <nav className="w-full relative justify-between bg-red items-center flex max-w-2xl py-4 px-5  mx-auto border-b border-spacing-4">
            <div className="flex-1">
             <Logo/>

            </div>
            <NewsLetterDialog/>
            <ModeToggle/>
        </nav>
    )

}

function Logo(){
    return <div className='flex items-center'>
       <Link className="font-bold text-3xl text-[#fff] flex " href='/'>
            <FontAwesomeIcon
                className='text-3x mr-2 text-primary' 
                icon={faComments}
            />
            <div className="hidden md:flex">
            <span className='text-gray-400'>Gist</span>
            <span className="text-primary">Fiesta</span>
            </div>

        </Link>
    </div>
  }