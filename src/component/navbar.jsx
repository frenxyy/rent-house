'use client'

import React, { useState } from "react";
import { Link } from "react-scroll";

const navbar = () => {
    const [open, setOpen] = useState(false);

    const Links = [
        {
            id: '1',
            name: 'Home',
            href: 'hero',
        },
        {
            id: '2',
            name: 'Service',
            href: 'service',
        },
        {
            id: '3',
            name: 'Product',
            href: 'product',
        },
        {
            id: '4',
            name: 'FAQ',
            href: 'faq',
        },
    ]

    return (
        <header className={`flex w-full items-center fixed text-white bg-dark border-white border-b-2`}>
            <div className="container">
                <div className="relative flex items-center justify-between">
                    <div className="flex-auto max-w-full px-4">
                        <a href="/#" className="block w-full py-5">
                            <h1 className="font-bold text-3xl font-mono">HouseWreck</h1>
                        </a>
                    </div>
                    <div className="flex-1 w-full items-center justify-between px-4">
                        <div>
                            <button onClick={() => setOpen(!open)} id="navbarToggler" className={` ${open && "navbarTogglerActive"
                                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                            </button>
                            <nav
                                // :className="!navbarOpen && 'hidden' "
                                id="navbarCollapse"
                                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"
                                    } `}>
                                <ul className="block lg:flex">
                                    {Links.map((to) => {
                                        return (
                                            <li key={to.id}>
                                                <Link to={to.href} spy={true} smooth={true} activeStyle={{color : 'white',}}
                                                    className="cursor-pointer flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex" >
                                                    {to.name}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default navbar;