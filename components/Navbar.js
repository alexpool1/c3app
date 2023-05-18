import { useRouter } from "next/router";
import { useState } from "react";
import Image from "./Image";

const NavbarItem = ({ text, URL, router }) => {
    return (
        <div
            
            onClick={() => {
                router.push(URL);
            }}>
            {text}
        </div>
    );
};

function Navbar() {
  return (
    <div>
      
    </div>
  )
}

export default Navbar
