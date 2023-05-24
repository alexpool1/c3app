import Navbar from "../components/Navbar";
import Image from "../components/Image";
import { useRouter } from 'next/router';
import Button from '../components/Button';

export default function Home() {
  const router = useRouter();
  return (
    <div >
    <Navbar />
      <div class="max-w-[40%] md:max-w-[30%] mx-auto">
        <Image src="/logos/wordmark-color.png" alt="C3forMe" />
      </div>
      <div class="text-medium-gray font-sans font-normal text-sm lg:text-base text-justify max-w-[80%] md:max-w-[50%] mx-auto">
      The only constant is change, so why not be prepared for it? Let’s face it - The planning process for life after high school and the thought of transitioning to adulthood can be very intimidating. Now with C3 For Me, it doesn’t have to be! Whether you are transitioning to high school, adulthood, planning for continued education, or employment - C3 for Me has something for you! Through person-centered and personalized planning, C3 For Me will help you develop and sharpen your skills to prepare for independence.
      </div>
      <div class="flex justify-center my-5">
        <button class="bg-dark-green text-white rounded font-sans font-normal py-2 px-4 w-3/6 lg:w-1/4 hover:bg-green-700 "
        onClick={() => { router.push("/signup"); }}
        >
          Create an account
        </button>
      </div>
      <div class="flex justify-center my-5">
        <button class="bg-white text-gray-800 border-gray-800 border-2 outline-2 rounded font-sans font-normal px-4 py-2 w-3/6 lg:w-1/4 transition-colors hover:bg-gray-100"
        onClick={() => { router.push("/login"); }}
        >
          <span class="text-gray-800">Have an account? </span>
          <span class="text-green-700">Login</span>
        </button>
      </div>

      <div className="flex flex-col items-center justify-center mb-4">
      <ul>
        <li>
          <Button src='/logos/indep-circle.png' alt="Independent Living" text="Independent Living" backgroundColor='#F69B86'/>
        </li>
        <li>
          <Button src='/logos/edu-circle.png' alt="Education & Employment" text="Education & Employment" backgroundColor='#FFD277'/>
        </li>
        <li>
          <Button src='/logos/self-circle.png' alt="Self Determination" text="Self Determination" backgroundColor='#A198E9'/>
        </li>
      </ul>
    </div>

    </div>
  )
}
