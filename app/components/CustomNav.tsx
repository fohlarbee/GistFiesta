"use client"
import Link from 'next/link';

const tabLinks = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'News',
        href: '#news'
    },
    {
        name: 'Contact',
        href: '#about'
    },
    {
        name: 'About',
        href: '#about'
    }
]

const CustomNav = ({activeIndex, setActiveIndex}: {activeIndex: number | null, setActiveIndex: (index: number) => void}) => {
    return (
        <div className="topnav bg-[#333] overflow-hidden">
            {tabLinks.map((link, index) => (
                <Link 
                    key={index} 
                    href={link.href}  
                    className={
                        `${
                            activeIndex === index 
                            ? 
                            "bg-orange-600 text-white" : ""
                        } px-4 py-2
                        float-left 
                        text-center 
                        text-white 
                        hover:bg-[#ddd]
                        hover:text-[#000]
                        `}   
                    onClick={() => setActiveIndex(index)}
                >
                    {link.name}
                </Link>
            ))}
        </div>
    )
}

export default CustomNav;