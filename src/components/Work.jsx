import React from "react";

const Work = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col justify-center items-center font-bold text-xl">
        <img
          src="/assets/work.jpeg"
          alt=""
          className="logo rounded-full m-6 w-52 "
        />
        <span>Work</span>
      </div>
      <div>
        <div className="flex justify-center items-center ">
          <h1 className="w-32">Present</h1>
          <div>
            <p className="font-bold">Jessica greening marketing</p>
            <p>
              creates blog posts, landing pages, e-books and case studies for
              clients
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <h1 className="w-32">2016</h1>
          <div>
            <p className="font-bold">Kaiser permanette</p>
            <p>
              creates blog posts, landing pages, e-books and case studies for
              clients
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <h1 className="w-32">2013 - 2015</h1>
          <div>
            <p className="font-bold">Humana Agile Project</p>
            <p>
              creates blog posts, landing pages, e-books and case studies for
              clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
