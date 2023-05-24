import FirstNavbar from "../components/FirstNavbar";
import Image from "../components/Image";
import { useRouter } from 'next/router';

function login() {
  const router = useRouter();
  return (
    
    <div>
    <FirstNavbar />
      <div class="max-w-[30%] md:max-w-[15%] mx-auto mt-4">
        <Image src="/logos/cards-logo.png" alt="C3forMe" />
      </div>
      <div class="max-w-[60%] mx-auto font-sans font-medium text-3xl text-dark-green my-5">
        Log in
      </div>
      <div class="max-w-[60%] mx-auto font-sans font-medium text-lg text-medium-gray my-4">
        Email
      </div>
      <div class="w-[60%] mx-auto">
        <input type="email" class="bg-white text-gray-800 border-gray-800 border-2 outline-2 rounded w-full"></input>
      </div>
      <div class="max-w-[60%] mx-auto font-sans font-medium text-lg text-medium-gray my-4">
        Password
      </div>
      <div class="w-[60%] mx-auto">
        <input type="password" class="bg-white text-gray-800 border-gray-800 border-2 outline-2 rounded w-full"></input>
      </div>
      <div class="w-[60%] mx-auto font-sans font-normal text-md text-dark-gray my-5">
        By clicking Log in, you accept C3forMe's Terms of Service and Privacy Policy
      </div>
      <div class="flex justify-center my-5">
        <button class="bg-dark-green text-white rounded font-sans font-normal py-2 px-4 w-[60%] hover:bg-green-700 "
        onClick={() => { router.push("/login"); }}
        >
          Log in
        </button>
      </div>
      <div class="flex justify-center my-5">
        <button class="bg-white text-dark-gray border-dark-gray border-2 outline-2 rounded font-sans font-normal px-4 py-2 w-[60%] text-md transition-colors hover:bg-gray-100"
        onClick={() => { router.push("/signup"); }}
        >
          <span class="text-gray-800">New to C3forMe? </span>
          <span class="text-green-700">Create an account</span>
        </button>
      </div>
    </div>
  )
}

export default login
