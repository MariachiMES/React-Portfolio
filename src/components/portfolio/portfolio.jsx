import { ListItemAvatar } from "@material-ui/core";
import { getByTitle } from "@testing-library/react";
import { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="" alt="" />
          <h3>Stuff</h3>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h3>Stuff</h3>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h3>Stuff</h3>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h3>Stuff</h3>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h3>Stuff</h3>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h3>Stuff</h3>
        </div>
      </div>
    </div>
  );
}
