import "./App.css";

export default function ProjectCard(props) {
  let no = props.no;
  let title = props.title;
  let description = props.description;
  let status = props.status;

  let color;
  if (status === "In-Progress") color = "#FF2D55";
  else if (status === "Completed") color = "#06A85D";
  else color = "#32ADE6";

  return (
    <div className="ProjectCard">
      <div style={{ borderColor: color }}>
        <h1>Project No: {no}</h1>
        <h2>Title: {title}</h2>
        <h4>Description: {description}</h4>
        <h3 style={{ color: color }}>Status: {status}</h3>
      </div>
    </div>
  );
}
