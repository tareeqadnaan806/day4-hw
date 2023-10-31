import React from "react";

const Skills = () => {
  return (
    <div className="flex  items-center">
      <div className="m-3 w-52 flex flex-col justify-center items-center">
        <img src="/assets/skills.jpeg" alt="" className="logo rounded-full" />
        <span className="text-xl font-bold">Skills</span>
      </div>
      <div className="w-1/4 ">
        <div>Writing</div>
        <div>Reading</div>
        <div>Social media</div>
        <div>Reasearching</div>
        <div>SEO</div>
      </div>
      <div className="w-2/3">
        <p>*) Organize your life with Agile method</p>
        <p>
          *) Is 40 hours a week too muxh? <br />
          Here's what history and science says'
        </p>
        <p>*) Why generalist writers lead to lost profiles in B2B tech</p>
      </div>
    </div>
  );
};

export default Skills;
