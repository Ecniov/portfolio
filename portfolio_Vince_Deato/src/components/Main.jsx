import React from 'react';

export default function Main() {
  return (
    <div>
      <div className="hero-1 flex flex-col justify-center items-center py-20 text-orange-500  ">
        <div className="w-150px max-w-3xl flex flex-row justify-center">
          <div className="w-150px flex flex-col items-start">
            {/* Create new Divisions for Name, Skills and Buttons */}
            <div className="font-bold text-3xl text-justify">
              Hi! My name is <span className="text-white">Vince Riley M. Deato</span>, a graduate from Holy Angel University under Computer Engineering.
            </div>
            <br></br>
            <div className="flex flex-row gap-4 items-center">
              {/* Create new division for skillsets */}
              <div className="font-extrabold text-2xl uppercase py-5 text-white">Skills: </div>
              <div className="text-xl">Database,</div>
              <div className="text-xl">Troubleshooting,</div>
              <div className="text-xl">Developer,</div>
              
            </div>
            {/* Create Division for Buttons */}
            <div className="flex flex-row gap-5 items-center py-5">
              <button className="border-2 px-4 py-2 border-black rounded-full">Learn More</button>
              <button className="border-2 border-black bg-orange-500 rounded-full px-4 py-2 text-black">Contact Us</button>
            </div>
          </div>
          {/* Create new division for hero 2 component */}
          <div className="hero2 ml-20">
            <img src="/src/images/dp.jpg" className="rounded-full border-black border-2 h-auto w-auto" alt="Hero Image" />
          </div>
        </div>
      </div>

    </div>
  );
}
