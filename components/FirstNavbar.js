import { useRouter } from "next/router";
import Image from "./Image";

function FirstNavbar() {
    const router = useRouter();
  return (
    <nav className="bg-white border-b border-gray-300 h-16 flex items-center justify-between px-4">
    <div
        className="hover:cursor-pointer ml-4 h-auto w-28 justify-self-start"
        onClick={() => { router.push("/"); }}>
        <Image src="/logos/nav-logo.png" alt="C3forMe Logo" />
      </div>
    </nav>
  )
}

export default FirstNavbar
