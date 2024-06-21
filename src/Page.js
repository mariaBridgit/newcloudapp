import "./App.css";
import ProjectCard from "./ProjectCard";

export default function Page() {
  let projects = [
    {
      id: 1,
      no: 1,
      title: "EDITH",
      description:
        " Helps companies which sources market data from external providers and other RMS providers as well as point-of-sale providers",
      status: "In-Progress",
    },
    {
      id: 2,
      no: 2,
      title: "HOLCIM",
      description:
        " Helps companies which sources market data from external providers and other RMS providers as well as point-of-sale providers",
      status: "Completed",
    },
    {
      id: 3,
      no: 3,
      title: "DCanvas",
      description:
        " Helps companies which sources market data from external providers and other RMS providers as well as point-of-sale providers",
      status: "Completed",
    },
    {
      id: 4,
      no: 4,
      title: "Cummins",
      description:
        " Helps companies which sources market data from external providers and other RMS providers as well as point-of-sale providers",
      status: "In-Progress",
    },
    {
      id: 5,
      no: 5,
      title: "Materials UI",
      description:
        " Helps companies which sources market data from external providers and other RMS providers as well as point-of-sale providers",
      status: "To-Do",
    },
    {
      id: 6,
      no: 6,
      title: "OneView",
      description:
        " Helps companies which sources market data from external providers and other RMS providers as well as point-of-sale providers",
      status: "To-Do",
    },
  ];

  return (
    <div className="Page">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          no={project.no}
          title={project.title}
          description={project.description}
          status={project.status}
        />
      ))}
    </div>
  );
}
