import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
    // btn a chap dile off on hbe seta korara jonno potome state use kore porer onclick er vitor condition use kora hoise ans bank use kora hoise 
    const [open, setOpen] = useState(false);
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/products', name: 'Products', id: 3 },
        { path: '/services', name: 'Services', id: 4 },
        { path: '/contact', name: 'Contact', id: 5 }
    ]
    return (

        <nav>

            {/* icone open and close start */}
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoCloseSharp></IoCloseSharp> : <IoIosMenu></IoIosMenu>
                }
            </div>
            {/* end */}

            <ul className={`md:flex absolute md:static
            duration-1000
            ${open ? 'top-12' : '-top-60'}
            bg-slate-700 text-white px-4 m-4`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>

    );
};

export default Navbar;