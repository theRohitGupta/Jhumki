'use client'
import React, { useEffect, useState } from "react";
import InfoBar from "./InfoBar";
import infoBarContents from "../../../data/navbarInfo";

const Navbar: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % infoBarContents.length);
        }, 3000);

        return () => clearInterval(interval);
    }, );

    return (
        <div>
            <InfoBar content={infoBarContents[currentIndex].content} key={infoBarContents[currentIndex].key} />
        </div>
    );
};

export default Navbar;