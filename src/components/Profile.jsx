import React from "react";

const Profile = () => {
  return (
    <div className="flex  items-center">
      <div className="m-3 w-52 flex flex-col justify-center items-center">
        <img src="/assets/profile.jpeg" alt="" className="logo" />{" "}
        <span className="text-xl font-bold">Profile</span>
      </div>
      <div className="w-1/4 ">
        <h1 className="text-xl font-bold">Mohammed Tareeq Adnaan</h1>
        <p>Web Developer</p>
      </div>
      <div className="w-2/3">
        <p>
          Passionate and Dedicated Frontend Developer aspiring to create
          engaging user interfaces throughHTML, CSS, and JavaScript and ReactJS.
          Eager to contribute to dynamic projects and learn from experienced
          developers.
        </p>
        <span className="text-xl ">Email: </span>
        <a href="mailto:tareeqadnaan806@gmail.com" className="text-blue-500">
          tareeqadnaan806@gmail.com
        </a>
        <br /> <span className="text-xl ">Website: </span>
        <a
          href="https://tareeqadnaan806.github.io/resume/"
          className="text-blue-500"
        >
          Adnaan portfolio
        </a>
      </div>
    </div>
  );
};

export default Profile;
