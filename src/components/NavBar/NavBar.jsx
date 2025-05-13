import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile/:username', name: 'Profile' }
      ];
      

    return (
        <nav>
            <div className="md:hidden px-6 py-4 text-2xl bg-yellow-600 w-full" onClick={() => setOpen(!open)}>
                {
                    open === true? <AiOutlineClose></AiOutlineClose>: <HiMenuAlt1 className=""></HiMenuAlt1>
                }
              
            </div>
            <ul className={`md:flex absolute ${open? '': 'hidden'} bg-yellow-600 px-6 mx-4 shadow-lg text-white font-bold`}>
                {
                    routes.map(route =><Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;