import { Link } from "react-scroll";
import React, { useState } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
export default () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div
            className="fixed justify-center z-10"
            style={{ top: "84px", width: "100%", left:"10px",right:"10px"}}
        >
            <div className="flex flex-row bg-white text-black w-screen mb-5">
            <div className="">
                                <img
                                    className="m-l-10 h-12 w-auto object-fit mix-blend-multiply  mx-auto lg:mx-0"
                                    src="/AgremLogo.jpg"
                                    alt="About Us"
                                />
                            </div>
                <div className="grid grid-cols container mx-auto px-4">
                    <div className="grid grid-cols items-center justify-between h-16">
                        <div className="flex items-center">
                            <DesktopHeader/>
                            <MobileHeader/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
