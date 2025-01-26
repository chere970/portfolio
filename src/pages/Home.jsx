import React from 'react';
import AboutSection from '../components/AboutSection';
import SkillCard from '../components/SkillCard';

function Home() {
  return (
    <>
    <div className="container mx-auto p-8">
        
        <h1 className="text-3xl text-black font-bold mb-8">Welcome </h1>
        {/* <h1 className="text-3xl text-black font-bold mb-8">Welcome </h1> */}
      {/* <p className="text-lg mb-4">
        Hi, I'm Cherinet Kebede, a web developer passionate about creating 
        user-friendly and engaging web experiences.
        </p> */}
      <AboutSection />
    </div>
   <div>
    <h1 className='text-black'>Skills</h1>
   </div>
    <div className="container w-full flex flex-col mx-auto p-8 m-5 space-y-6">
        <SkillCard skill="HTML" proficiency={90} />
        <SkillCard skill="CSS" proficiency={70} />
        <SkillCard skill="JavaScript" proficiency={70} />
        <SkillCard skill="React" proficiency={60} />
    </div>
    </>
  );
}

export default Home;