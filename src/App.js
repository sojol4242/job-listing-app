import React, { useEffect, useState } from "react";
import "./App.css";
import fakeData from "./assets/fakeData.json";
import JobBoards from "./Components/JobBoards";

function App() {
  //  console.log(data);
  const data = fakeData;
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    console.log(data);
    setJobs(data);
  }, [data]);
  return (
    <div className="bg-gradient-to-r from-green-200 to-blue-300 border-gray-200 h-full w-full p-5">
    
      {jobs.length === 0 ? (
        <div className="flex bg-white-500 rounded-md justify-center items-center h-screen w-full">
          <img className="" src="https://i.ibb.co/wYTXbJs/Ripple-1-7s-307px.gif" alt="loading..." />
        </div>
        
      ) : (
      jobs.map(job=>  <JobBoards data={job} key={job.id} />)
      )}
      <div class="attribution text-center">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        class="text-purpul font-bold"> Frontend Mentor </a>. Coded by <a href="#" class="text-purpul font-bold">Md Moniruzzaman Sojol</a>.
    </div>
    </div>
  );
}

export default App;
