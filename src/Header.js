import "./App.css";
import Catalog from "./Catalog";
import NewProject from "./NewProject";
import Sort from "./Sort";
import Statistics from "./Statistics";
import TeamsNo from "./TeamsNo";
import Title from "./Title";
import cloudlogo from "./cloudlogo.png";

export default function Header() {
  return (
    <div>
      <div className="Header">
        <div className="Header">
          <img className="Logo" src={cloudlogo} alt="Logo" />
          <Title />
        </div>
        <div className="TopHeader">
          <Statistics />
          <TeamsNo />
          <NewProject />
        </div>
      </div>
      <div className="BottomHeader">
        <div className="Header" style={{ padding: "0px 10px" }}>
          <div className="searchBar">Search</div>
          <Catalog />
        </div>
        <Sort />
      </div>
    </div>
  );
}
