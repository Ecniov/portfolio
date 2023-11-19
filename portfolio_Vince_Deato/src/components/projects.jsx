import React from 'react';

export default function Projects() {
  return (
    <div className="bg-stone-800 w-full h-fill">
      <div className="projects flex flex-col justify-center items-center py-4 pb-20">
        <div className="w-full max-w-3xl flex flex-row justify-center">
          <div className="w-full flex flex-col items-start">
            <div className="font-bold text-3xl text-justify text-white">Projects & Achievements:</div>
            <div className="items-center mt-4 text-orange-500">
            <ul className="list-disc pl-5">
               <li className="text-xl mb-2">Battle Bots</li>
               <li className="text-xl mb-2">Database using SQL</li>
               <li className="text-xl mb-2">Portfolios made in CSS,HTML,Java,Tailwind,React</li>
               <li className="text-xl mb-2">Gloved Based Motion sensor, FSL to audio</li>
               <li className="text-xl mb-2">Dean's Lister for the whole 1st year of college</li>
               <li className="text-xl mb-2">Dean's Lister for first semester of 2nd year of college</li>
               <li className="text-xl mb-2">Dean's Lister for the whole 3rd year of college</li>
            </ul>
          </div>
          </div>
          {/* Add image on the right side */}
          <div className="hero2 ml-20">
            <img src="/src/images/medals.png" className="h-auto w-auto" alt="Project Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
