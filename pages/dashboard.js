import Navbar from "../components/Navbar";
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function EmotionOption({ emotion, selected, onClick }) {
    return (
      <div className="relative flex flex-col items-center cursor-pointer" onClick={onClick}>
        {selected && (
            <div className="flex items-center flex-col">
            <div className="rounded ring-1 ring-green-500 items-center p-0.5">
                <div className="flex items-center justify-center">
                <i className={`${emotion.icon}`}></i>
                </div>
                <div className="text-center text-sm">{emotion.name}</div>
            </div>
            </div>
        )}
        {!selected && (
            <div className="flex items-center flex-col">
            <div className="rounded-full overflow-hidden">
            <i className={`${emotion.icon}`}></i>
            </div>
            <div className="text-center text-sm">{emotion.name}</div>
            </div>
        )}
      </div>
    );
  }

function dashboard() {
    const [isMinimized, setIsMinimized] = useState(false);
    const [selectedEmotion, setSelectedEmotion] = useState({}); 

    const handleMinimizeClick = () => {
        console.log('Minimize button clicked');
        setIsMinimized(!isMinimized);
    };
  
    const handleEmotionSelection = (emotion) => {
      setSelectedEmotion(emotion);
    }

  const emotionOptions = [
    { name: 'Excellent', icon: "fas fa-grin text-teal text-2xl" },
    { name: 'Good', icon: "fas fa-smile text-light-green text-2xl" },
    { name: 'Neutral', icon: "fas fa-meh text-toned-blue text-2xl" },
    { name: 'Not Great', icon: "fas fa-sad-tear text-dark-yellow text-2xl" },
    { name: 'Bad', icon: "fas fa-frown text-coral text-2xl" },
  ];

  return (
    <div>
    <Navbar />
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-[80%] min-[700px]:max-w-[60%] min-[1000px]:max-w-[40%] mx-auto mt-4}">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">How are you feeling today?</h2>
        <button className="text-gray-500 hover:text-gray-700" onClick={handleMinimizeClick}>
            <i className="fas fa-window-minimize"></i>
        </button>
      </div>
      {!isMinimized && (
        <div>
            <div className="flex justify-between">
        {emotionOptions.map((emotion, index) => (
                <EmotionOption
                    key={index}
                    emotion={emotion}
                    selected={selectedEmotion.name === emotion.name}
                    onClick={() => handleEmotionSelection(emotion)}
                />
            ))}
        </div>
        <button className="mt-4 text-dark-green font-bold py-2 px-4 border-none float-right">
            View Check-in History &nbsp; &gt;  
        </button>
        </div>
      )}
    </div>
    </div>
  )
}

export default dashboard
