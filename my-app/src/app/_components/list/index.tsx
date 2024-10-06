import { useEffect, useState } from "react";
import axios from "axios";

interface Project {
  _id: string;
  title: string;
  description: string;
  issues: number;
  resolved: number;
  comment: number;
  progress: number;
}

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/projects");
      setProjects(response.data.data);
    } catch (error) {
      console.error("Error fetching projects", error);
    }
  };

  const deleteProject = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3001/api/projects?id=${id}`);
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project", error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {projects.map((project) => (
        <div
          key={project._id}
          className="p-4 border border-gray-300 bg-gray-100 rounded-lg shadow-md relative"
        >
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p>{project.description}</p>
          <div className="mt-2">
            <span className="text-sm text-gray-600">
              Issues: {project.issues}
            </span>
            <span className="ml-4 text-sm text-gray-600">
              Resolved: {project.resolved}
            </span>
            <span className="ml-4 text-sm text-gray-600">
              Comments: {project.comment}
            </span>
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-600">
              Progress: {project.progress}%
            </span>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className={`h-2 bg-green-500 rounded-full`}
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
          <div className="absolute top-2 right-2 flex space-x-2">
            <button
              className="bg-blue-500 text-white p-1 rounded"
              onClick={() => alert("Edit feature not implemented yet")}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white p-1 rounded"
              onClick={() => deleteProject(project._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
