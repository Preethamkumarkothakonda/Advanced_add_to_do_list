import React from "react";

const FILTER_NAMES = ["All", "Active", "Completed"];

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="filters">
      {FILTER_NAMES.map((name) => (
        <button
          key={name}
          type="button"
          className={filter === name ? "active" : ""}
          onClick={() => setFilter(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
