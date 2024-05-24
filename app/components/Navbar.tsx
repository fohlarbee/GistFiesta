import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

export const Navbar = () => {


    return(
        <nav className="w-full relative justify-between bg-red items-center flex max-w-2xl py-4 px-5  mx-auto">
            <Link className="font-bold text-3xl" href='/'>Gist
                <span className="text-primary">Fiesta</span>
            </Link>
            {/* <span>Fohlarbee</span> */}
            <ModeToggle/>

        </nav>
    )

}