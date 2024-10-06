"use client";

import { useState } from "react";
import axios from "axios";
// import { useRouter } from "next/router";

const ProjectCreate = () => {
  //   const router = useRouter();

  const [title, setTitle] = useState("");
  const [clientName, setClientName] = useState("");
  const [rate, setRate] = useState("");
  const [size, setSize] = useState("Small");
  const [projectType, setProjectType] = useState("Hourly");
  const [priority, setPriority] = useState("Low");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newProject = {
        title,
        clientName,
        rate,
        size,
        projectType,
        priority,
        startDate,
        endDate,
        details,
      };

      await axios.post("http://localhost:3001/api/projects", newProject);

      //   router.push("/project-list");
    } catch (error) {
      console.error("Error creating project", error);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4 w-[1200px]">
      <h1 className="text-2xl font-bold mb-4">Create New Project</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <label>Project Title</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Client Name</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Project Rate</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Project Size</label>
          <select
            className="border p-2 w-full"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div>
          <label>Project Type</label>
          <select
            className="border p-2 w-full"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option value="Hourly">Hourly</option>
            <option value="Fixed">Fixed</option>
          </select>
        </div>

        <div>
          <label>Priority</label>
          <select
            className="border p-2 w-full"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label>Starting Date</label>
          <input
            type="date"
            className="border p-2 w-full"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <label>Ending Date</label>
          <input
            type="date"
            className="border p-2 w-full"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="col-span-2">
          <label>Details</label>
          <textarea
            className="border p-2 w-full"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectCreate;
