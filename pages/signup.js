import FirstNavbar from "../components/FirstNavbar";
import Image from "../components/Image";
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function signup() {
    
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
    <FirstNavbar />
      <div class="max-w-[15%] mx-auto mt-4">
        <Image src="/logos/cards-logo.png" alt="C3forMe" />
      </div>
      <div class="max-w-[60%] mx-auto font-sans my-5 flex">
        <span class="flex-grow-0 flex-shrink-0 font-medium text-3xl text-dark-green">General</span>
        <span class="flex-grow font-medium text-xl text-dark-gray flex justify-end mr-2">Step 1/2</span>
        </div>
      <div className="max-w-[60%] mx-auto font-sans font-medium text-lg text-medium-gray my-2">
        Birthday
      </div>
      <div className="w-[60%] mx-auto">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          className="bg-white text-gray-800 border-gray-800 border-2 outline-2 rounded w-full px-1 "
        />
      </div>
      <div class="max-w-[60%] mx-auto font-sans font-medium text-lg text-medium-gray my-4">
    <div class="inline-block w-1/2 pr-2">
        <div class="my-2">First Name</div>
        <input type="text" class="bg-white text-gray-800 border-gray-800 border-2 outline-2 rounded w-full px-1"></input>
    </div>
    <div class="inline-block w-1/2 pl-2">
        <div class="my-2">Last Name</div>
        <input type="text" class="bg-white text-gray-800 border-gray-800 border-2 outline-2 rounded w-full px-1"></input>
    </div>
    </div>
      <div class="max-w-[60%] mx-auto font-sans font-medium text-lg text-medium-gray my-2">
        Email
      </div>
      <div class="w-[60%] mx-auto">
        <input type="email" class="bg-white text-gray-800 border-gray-800 border-2 outline-2 rounded w-full px-1 mb-2"></input>
      </div>
      <div class="max-w-[60%] mx-auto font-sans font-medium text-lg text-medium-gray my-2">
        Password
      </div>
      <div class="w-[60%] mx-auto">
        <input type="password" class="bg-white text-gray-800 border-gray-800 border-2 outline-2 rounded w-full px-1 mb-2"></input>
      </div>
      <div class="w-[60%] mx-auto font-sans font-normal text-md text-dark-gray my-5">
        By signing up, you accept C3forMe's Terms of Service and Privacy Policy
      </div>
      <div class="flex justify-center my-5">
        <button class="bg-dark-yellow text-dark-gray rounded font-sans font-normal  py-2 px-4 w-[60%] hover:bg-yellow-400 "
        onClick={() => { router.push("/profile"); }}
        >
          Save
        </button>
      </div>
      <div class="flex justify-center my-5">
        <button class="bg-white text-dark-gray border-dark-gray border-2 outline-2 rounded font-sans font-normal px-4 py-2 w-[60%] text-md transition-colors hover:bg-gray-100"
        onClick={() => { router.push("/login"); }}
        >
          <span class="text-gray-800">Already have an account? </span>
          <span class="text-green-700">Log in</span>
        </button>
      </div>

    </div>
  )
}

export default signup
