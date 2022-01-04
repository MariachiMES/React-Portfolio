import { ListItemAvatar } from "@material-ui/core";
import { getByTitle } from "@testing-library/react";
import { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";
import {
  fullStackPortfolio,
  frontEndPortfolio,
  backEndPortfolio,
  reactPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("fullStack");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "fullStack",
      title: "Full-Stack",
    },
    {
      id: "frontEnd",
      title: "Front-End",
    },
    {
      id: "backEnd",
      title: "Back-End",
    },
    {
      id: "react",
      title: "React",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "fullStack":
        setData(fullStackPortfolio);
        break;
      case "frontEnd":
        setData(frontEndPortfolio);
        break;
      case "backEnd":
        setData(backEndPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
    }
  }, [selected]);
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
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
            <h2>
              <a href={d.github} target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href={d.deployed} target="_blank">
                <i class="fas fa-link"></i>
              </a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
