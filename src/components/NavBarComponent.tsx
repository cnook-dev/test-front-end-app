import { Navbar, Link, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";

const NavBarComponent = () => {
    const menuNavBars = [
        { name: 'Washing Machine', href: '/' },
        { name: 'Sort Numbers', href: '/numbers' },
        { name: 'Employees Info', href: '/employee-info' }
    ];

    return (
        <Navbar>
            <div className="flex justify-between w-full items-center px-4">
                {/* Navbar Brand */}
                <NavbarBrand className="flex items-center">
                    <h2 className="text-blue-600 font-bold">CHANTAWIMON KIWATANA</h2>
                </NavbarBrand>

                {/* Navbar Links */}
                <NavbarContent className="hidden sm:flex lg:space-x-6" justify="center">
                    {menuNavBars.map((menuNavBar, index) => (
                        <NavbarItem key={index}>
                            <Link color="foreground" className="font-bold" href={menuNavBar.href}>
                                {menuNavBar.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
            </div>
        </Navbar>
    );
};

export default NavBarComponent;
