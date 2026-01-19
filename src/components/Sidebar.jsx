const Sidebar = ({ SelectedTab, setSelectedTab }) => {



  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <span className="fs-4">Sidebar</span>
      </a>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li 
        className="nav-item" 
        onClick={() => {
          setSelectedTab("Home");
        }}>
        <a href="#" className={`nav-link text-black ${SelectedTab === "Home" && "active"}`}>
            Home
          </a>
        </li>
        <li onClick={() => setSelectedTab("Create Post")}>
          <a href="#" className={`nav-link text-black ${SelectedTab === "Create Post" && "active"}`}>
            Create Post
          </a>
        </li> 
      </ul>
    </div>

  );
};

export default Sidebar;
