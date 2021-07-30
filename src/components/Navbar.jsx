import React from 'react'
import StaticDesktopNavbar from "./StaticDesktopNavbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import StaticMobileNavbar from "./StaticMobileNavbar";

export default function Navbar() {
    const mobileSize = useMediaQuery("(max-width: 900px)");//Breaking point: 900px
    return !mobileSize ? <StaticDesktopNavbar /> : <StaticMobileNavbar />;
}
