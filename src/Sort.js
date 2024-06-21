import "./App.css";

export default function Sort() {
  return (
    <div className="Dropdown">
      <label for="sort">Sort: </label>
      <select name="sort" id="sort">
        <option value="Alphabetical">Alphabetical</option>
        <option value="Numerical">Numerical</option>
        <option value="Date-Created">Date-Created</option>
        <option value="Last-Modified">Last-Modified</option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
    </div>
  );
}
