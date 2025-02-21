import "../styles/sidebar.css";

const SideBar = () => {
  return (
    <>
      <div className="sidebar-conntainer">
        <div className="filter-section">
          <h3 className="filter-title">Color</h3>
          <label>
            <input type="checkbox" /> Black
          </label>
          <label>
            <input type="checkbox" /> Blue
          </label>
          <label>
            <input type="checkbox" /> Red
          </label>
          <label>
            <input type="checkbox" /> Green
          </label>
        </div>

        <div className="filter-section">
          <h3 className="filter-title">Gender</h3>
          <label>
            <input type="checkbox" /> Men
          </label>
          <label>
            <input type="checkbox" /> Women
          </label>
        </div>

        <div className="filter-section">
          <h3 className="filter-title">Price</h3>
          <label>
            <input type="checkbox" /> Under ₹250
          </label>
          <label>
            <input type="checkbox" /> ₹251 - ₹350
          </label>
          <label>
            <input type="checkbox" /> ₹351 - ₹450
          </label>
          <label>
            <input type="checkbox" /> ₹451 - ₹500
          </label>
          <label>
            <input type="checkbox" /> Above ₹500
          </label>
        </div>

        <div className="filter-section">
          <h3 className="filter-title">Type</h3>
          <label>
            <input type="checkbox" /> Polo
          </label>
          <label>
            <input type="checkbox" /> Hoodie
          </label>
          <label>
            <input type="checkbox" /> Basic
          </label>
        </div>
      </div>
    </>
  );
};
export default SideBar;
