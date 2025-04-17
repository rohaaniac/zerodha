import React, { useState, useContext } from "react";
// Tooltip component of materialUI that comes on hovering
import { Tooltip, Grow } from "@mui/material";

import GeneralContext from "./GeneralContext";
import { watchList } from "../data/data";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { DoughnutChart } from "./DoughnutChart";

  // for doughnut chart
  const labels = watchList.map((subArray) => subArray["name"]);

  const WatchList = () => {
    const data = {
      labels,
      datasets: [
        {
          label: "Price",
          data: watchList.map((stock) => stock.price),
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };


  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchList.length} / 50</span>
      </div>

      <ul className="list">
        {watchList.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
        ;
      </ul>

      {/* passed component for Doughnutchart */}
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

// {stock} passed in from above watchlist.map()
const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchListActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}> {stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>

      {/* //passing showWatchListActions for hover effect for component <WatchListActions></WatchListActions>, by passing prop as stock.name */}
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

//setting up watchlist actions on hover
const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    // WatchList item passed, a span is created with the help of material UI to show options on hover effect with the help of Tooltip and its attributes, with a specific button
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          {/* defined in material ui */}
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
      </span>
      <span>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
