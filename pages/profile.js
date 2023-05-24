import FirstNavbar from "../components/FirstNavbar";
import Image from "../components/Image";
import { useRouter } from 'next/router';
import { useState } from 'react';

function AvatarOption({ avatar, selected, onClick }) {
    return (
      <div className="relative flex flex-col items-center cursor-pointer" onClick={onClick}>
        {selected && (
          <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-green-500">
            <img src={avatar.url} alt={avatar.name} className="w-full h-full" />
          </div>
        )}
        {!selected && (
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img src={avatar.url} alt={avatar.name} className="w-full h-full" />
          </div>
        )}
      </div>
    );
  }
  

function profile() {
    const router = useRouter();
    const [selectedAvatar, setSelectedAvatar] = useState({}); // Updated initial state
  
    const handleAvatarSelection = (avatar) => {
      setSelectedAvatar(avatar);
    }

  const avatarOptions = [
    { name: 'Dog', url: "/avatars/dog.png" },
    { name: 'Cat', url: "/avatars/cat.png" },
    { name: 'Elephant', url: "/avatars/elephant.png" },
    { name: 'Lion', url: "/avatars/lion.png" },
    { name: 'Panda', url: "/avatars/panda.png" },
    { name: 'Rabbit', url: "/avatars/rabbit.png" },
  ];

  return (
    <div>
    <FirstNavbar />
      <div className="max-w-[30%] md:max-w-[15%] mx-auto mt-4">
        <Image src="/logos/cards-logo.png" alt="C3forMe" />
      </div>
      <div class="max-w-[60%] mx-auto font-sans my-5 flex">
        <span class="flex-grow-0 flex-shrink-0 font-medium text-3xl text-dark-green">Profile</span>
        <span class="flex-grow font-medium text-xl text-dark-gray flex justify-end mr-2">Step 2/2</span>
        </div>
      <div className="max-w-[60%] mx-auto font-sans font-medium text-lg text-medium-gray my-4">
        Profile Name
      </div>
      <div className="w-[60%] mx-auto">
        <input type="email" className="bg-white text-gray-800 border-gray-800 border-2 outline-2 rounded w-full"></input>
      </div>
      <div className="max-w-[60%] mx-auto font-sans font-medium text-lg text-medium-gray my-4">
        Choose Your Avatar
      </div>
      <div className="w-[60%] mx-auto grid grid-cols-3 gap-4">
        {avatarOptions.map((avatar, index) => (
            <AvatarOption
                key={index}
                avatar={avatar}
                selected={selectedAvatar.name === avatar.name}
                onClick={() => handleAvatarSelection(avatar)}
            />
        ))}
      </div>
      <div className="w-[60%] mx-auto font-sans font-normal text-md text-dark-gray mt-8 mb-5">
        What transition topics do you want to learn more about? 
      </div>
       <div className="w-[60%] mx-auto font-sans font-normal text-md text-dark-gray space-y-2">
    <div className="flex items-center">
        <input type="checkbox" name="topics" value="topic1" className="mr-2"></input>
        <label>General information about Transition Planning</label>
    </div>
    <div className="flex items-center">
        <input type="checkbox" name="topics" value="topic2" className="mr-2"></input>
        <label>Education</label>
    </div>
    <div className="flex items-center">
        <input type="checkbox" name="topics" value="topic3" className="mr-2"></input>
        <label>Employment (getting a job)</label>
    </div>
    <div className="flex items-center">
        <input type="checkbox" name="topics" value="topic4" className="mr-2"></input>
        <label>Independent Living</label>
    </div>
    <div className="flex items-center">
        <input type="checkbox" name="topics" value="topic5" className="mr-2"></input>
        <label>Self-advocacy</label>
    </div>
    <div className="flex items-center">
        <input type="checkbox" name="topics" value="topic6" className="mr-2"></input>
        <label>Self-determination</label>
    </div>
    <div className="flex items-center">
        <input type="checkbox" name="topics" value="topic7" className="mr-2"></input>
        <label>Health and wellness</label>
    </div>
</div>

      <div className="flex justify-center mt-8 mb-5">
        <button className="bg-dark-yellow text-dark-gray rounded font-sans font-normal py-2 px-4 w-[60%] hover:bg-yellow-400 "
        onClick={() => { 
            // Access the selected avatar value and perform necessary actions
            console.log("Selected Avatar:", selectedAvatar);
            router.push("/profile"); }}
        >
          Save Profile
        </button>
      </div>
      <div className="w-[60%] mx-auto">
        <button className=" text-dark-gray font-sans font-normal text-lg py-2 px-4 border-none mb-4"
        onClick={() => { router.push("/signup"); }}>
        &lt;  &nbsp; Back
        </button>
      </div>

    </div>
  )
}

export default profile

