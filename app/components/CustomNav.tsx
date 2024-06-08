import Link from 'next/link';
import '../styles/Navbar.css';

const CustomNav = () => {
    return (
        <div className="topnav">
                <Link className="active" href="#home">Home</Link>
                <Link href="#news">News</Link>
                <Link href="#contact">Contact</Link>
                <Link href="#about">About</Link>
        </div>
    )
}

export default CustomNav;