import React from 'react';

export default function about() {
  return (
    <div className="bg-stone-800 w-full h-fill pb-10">
    <section id="about" className="flex flex-col h-max w-full ml-10">
    <div className="text-3xl font-bold  text-center text-white ">About Me</div>
    <div className="text-2xl font-medium text-center text-orange-500">Learn more about me</div>


        <div className="hero-1 flex flex-col justify-center items-center py-20 text-orange-500  ">
        <div className="w-150px max-w-3xl flex flex-row justify-center">
          <div className="w-150px flex flex-col items-start">
          <p className=" text-2xl text-justify">
          I'm a fourth-year <span className="text-white">Computer Engineering</span> at Holy Angel University, with a strong interest
          in data analysis or any allied fields. I'm eager to apply my data-related skills and knowledge
          through an internship as I work towards a future career in this field. I am looking forward to
          learning and gaining practical experience in our field.
          </p>
        </div>
        </div>


    </div>
  </section>
  </div>

    )
}