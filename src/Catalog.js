import "./App.css";

export default function Catalog() {
  return (
    <div className="Dropdown">
      <label for="catalog">Catalog: </label>
      <select name="catalog" id="catalog">
        <option value="All">All</option>
        <option value="To-Do">To-Do</option>
        <option value="In-Progress">In-Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
}
