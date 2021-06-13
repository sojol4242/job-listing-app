import React from "react";

const JobBoards = ({ data }) => {
  console.log();

  return (
    <div className="flex bg-white shadow-lg m-4 p-4 rounded-md justify-between items-center flex-wrap">
      <div className="flex items-center flex-wrap">
        <div className="flex flex-wrap">
          <img src={`${data.logo}`} alt={data.company} />
        </div>
        <div className="flex flex-col p-5">
          <div className="flex items-center justify-between">
            {/* <h2 ></h2> */}
            <a
              href="#"
              className="text-purple-600 font-semibold"
              href="#"
            >
              {data.company}
            </a>
            <a href="#" className="bg-green-400 py-1 px-3 mx-2 rounded-full text-sm text-green-50 tracking-wide">
              New
            </a>
            <a
              href="#"
              className="bg-gray-500 py-1 px-3 mx-2 rounded-full text-sm text-white tracking-wide"
            >
              Features
            </a>
          </div>
          <h2  className="text-blue-400 font-tiny py-2">{data.position}</h2>
          <div className="flex items-center">
            <p  className="text-gray-500 font-bold tracking-wide">{data.level}</p>
            <div class="rounded-full mx-2 h-3 w-3 flex items-center justify-center bg-gray-300"></div>
            <p  className="text-gray-500 font-bold tracking-wide">{data.contract}</p>
            <div class="rounded-full mx-2 h-3 w-3 flex items-center justify-center bg-gray-300"></div>
            <p  className="text-gray-500 font-bold tracking-wide">{data.postedAt}</p>
          </div>
        </div>
      </div>

      <div className="flex">
        <p  className="bg-indigo-100 py-1 px-3 mx-2 rounded-sm text-sm text-indigo-500 tracking-wide">{data.role}</p>
        {data.languages.map((skill) => (
          <p  className="bg-indigo-100 py-1 px-3 mx-2 rounded-sm text-sm text-indigo-500 tracking-wide">{skill}</p>
        ))}
      </div>
    </div>
  );
};

export default JobBoards;
