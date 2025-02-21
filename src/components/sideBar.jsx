import "../styles/sidebar.css";

const filterOptions = {
  colors: ["Black", "Blue", "Red", "Green"],
  genders: ["Men", "Women"],
  prices: ["Under 250", "251-350", "351-450", "451-500", "Above 500"],
  types: ["Polo", "Hoodie", "Basic"],
};

const SideBar = ({ handleFilterChange }) => {
  return (
    <>
      <div className="sidebar-conntainer">
        {Object.entries(filterOptions).map(([category, options], ind) => (
          <div className="filter-section" key={ind}>
            <h3 className="filter-title">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            {options.map((option, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange(category, option)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
export default SideBar;
