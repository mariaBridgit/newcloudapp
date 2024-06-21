import "./App.css";

function Value(props) {
  let title = props.title;
  let value = props.value;
  let color = props.color;

  return (
    <div className="statsValue">
      <h3 style={{ color: color }}>{title}</h3>
      <br />
      <h1>{value}</h1>
    </div>
  );
}

export default function Statistics() {
  let values = [
    { id: 1, title: "Total", value: 4, color: "#5856D6" },
    { id: 2, title: "To-Do", value: 4, color: "#32ADE6" },
    { id: 3, title: "In progress", value: 4, color: "#FF2D55" },
    { id: 4, title: "Completed", value: 4, color: "#06A85D" },
  ];

  return (
    <div className="Statistics">
      <div className="Values">
        <h3>Stats</h3>
        <div>
          {values.map((value) => (
            <Value
              key={value.id}
              title={value.title}
              value={value.value}
              color={value.color}
            />
          ))}
        </div>
      </div>

      <div className="Graph">Graph</div>
    </div>
  );
}
