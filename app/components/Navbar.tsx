import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { NewsLetterDialog } from "./Dialog"

export const Navbar = () => {


    return(
        <nav className="w-full relative justify-between bg-red items-center flex max-w-2xl py-4 px-5  mx-auto border-b border-spacing-4">
            <Link className="font-bold text-3xl" href='/'>Gist
                <span className="text-primary">Fiesta</span>
            </Link>
            {/* <span>Fohlarbee</span>x */}
            <NewsLetterDialog/>

            <ModeToggle/>

        </nav>
    )

}